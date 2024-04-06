use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Debug)]
pub struct MyBuffer {
    data: Vec<u8>,
}

#[wasm_bindgen]
impl MyBuffer {
    pub fn new(size: usize) -> MyBuffer {
        let data = vec![0; size];
        MyBuffer { data }
    }
    pub fn get_data(&self) -> Vec<u8> {
        self.data.clone()
    }
}
