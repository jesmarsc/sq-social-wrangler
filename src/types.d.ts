declare module '*.wasm' {
  const wasm: WebAssembly.Module;
  export default wasm;
}

declare module '*.ttf' {
  const raw: ArrayBuffer;
  export default raw;
}

declare module '*.yml' {
  const text: string;
  export default text;
}
