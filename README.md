# Lumi WASM

Running lumi in a webapp using WebAssembly. 

Lumi was written and compiled to WebAssembly in Rust. 

`https://github.com/Mauw94/lumi`

# How to run
* install NPM (`https://nodejs.org/en`)
* install Angular (`npm install -g @angular/cli`)
* Go to cloned dir and run app (`ng serve`)

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
