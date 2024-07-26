import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = "Hello world"

  private wasmInstance: any;

  async ngOnInit() {
    let test_code = `
    struct test() {
      fn something() {
          return 123
      }
    }

    a: int -> test.something()
    print a
    `

    await this.loadWasm();
    console.log(this.wasmInstance);
    const test = this.wasmInstance.run_code(test_code)
    console.log(test)
  }

  private async loadWasm() {
    try {
      const wasm = await import('../assets/pkg/lumi_lib.js');
      await wasm.default('../assets/pkg/lumi_lib_bg.wasm')
      this.wasmInstance = wasm
    } catch (err) {
      console.error('Error loading WebAssembly', err);
    }
  }
}
