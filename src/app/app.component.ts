import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WasmLoaderService } from './services/wasm-loader.service.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userInput: string = '';
  result: string[] = [];

  private wasmInstance: any;

  constructor(private wasmLoaderService: WasmLoaderService) { }

  async ngOnInit(): Promise<void> {
    await this.wasmLoaderService.loadWasm()
    this.wasmInstance = this.wasmLoaderService.getWasmInstance()
  }

  isButtonDisabled(): boolean {
    return this.userInput.trim() === ''
  }

  runCode() {
    try {
      if (this.userInput.trim() === '') {
        return
      }

      this.pruneRes(this.wasmInstance.run_code(this.userInput))
      console.log(this.result)
    } catch (err) {
      console.error("Something went wrong: ", err)
    }
  }

  private pruneRes(result: string[]): void {
    this.result = result.filter(item => item !== 'null');
  }
}
