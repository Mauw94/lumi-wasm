# lumi wasm

Running lumi in a webapp using WebAssembly. 

Lumi was written and compiled to WebAssembly in Rust. 

`https://github.com/Mauw94/lumi`

# How to run
* install NPM (node)
* install Angular (`npm install -g @angualr/cli`)
* Run app (`ng serve`)e

# Input code to test with
```
struct test() {
    fn something() {
        return 123
    }
}

a: int -> test.something()
print a
```
