import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WasmLoaderService } from '../services/wasm-loader.service.js';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lumi',
  standalone: true,
  imports: [FormsModule, CommonModule, MarkdownComponent],
  templateUrl: './lumi.component.html',
  styleUrl: './lumi.component.scss'
})
export class LumiComponent implements OnInit {
  userInput: string = ''
  parsedText: SafeHtml | undefined
  showReadme: boolean = false

  private result: string[] = []
  private wasmInstance: any

  constructor(
    private wasmLoaderService: WasmLoaderService,
    private sanitizer: DomSanitizer) { }

  async ngOnInit(): Promise<void> {
    await this.wasmLoaderService.loadWasm()
    this.wasmInstance = this.wasmLoaderService.getWasmInstance()
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.ctrlKey && event.key === 'Enter') {
      this.runCode()
    }
  }

  isButtonDisabled(): boolean {
    return this.userInput.trim() === ''
  }

  runCode(): void {
    try {
      if (this.userInput.trim() === '') {
        return
      }

      this.result = []
      this.parsedText = undefined
      this.pruneRes(this.wasmInstance.run_code(this.userInput))
      console.log(this.result)
    } catch (err) {
      console.error("Something went wrong: ", err)
    }
  }

  toggleReadme(): void {
    this.showReadme = !this.showReadme
  }
  
  private pruneRes(result: string[]): void {
    this.result = result.filter(item => item !== 'null')
    let combined = this.result.join(" ")
    this.parsedText = this.sanitizer.bypassSecurityTrustHtml(this.parseAnsiToHtml(combined))
  }

  private parseAnsiToHtml(text: string): string {
    return text
      .replace(/\x1b\[31m/g, '<span style="color: red;">')
      .replace(/\x1b\[32m/g, '<span style="color: green;">')
      .replace(/\x1b\[33m/g, '<span style="color: green;">')
      .replace(/\x1b\[34m/g, '<span style="color: blue;">')
      .replace(/\x1b\[35m/g, '<span style="color: magenta;">')
      .replace(/\x1b\[36m/g, '<span style="color: cyan;">')
      .replace(/\x1b\[37m/g, '<span style="color: white;">')
      .replace(/\x1b\[0m/g, '</span>')
  }
}
