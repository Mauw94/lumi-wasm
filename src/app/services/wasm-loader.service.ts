import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WasmLoaderService {
    private wasmInstance: any

    async loadWasm(): Promise<void> {
        try {
            const wasm = await import('../../assets/pkg/lumi_lib.js')
            await wasm.default('../../assets/pkg/lumi_lib_bg.wasm')

            this.wasmInstance = wasm
        } catch (err) {
            console.error('Error loading WebAssembly', err)
        }
    }

    getWasmInstance(): any {
        return this.wasmInstance
    }
}