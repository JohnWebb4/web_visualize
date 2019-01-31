interface IExports {
  someFunc: any;
}

const importedObject: IImportedObject = {
  imports: {
    // tslint:disable-next-line no-console
    imported_func: (...arg: any[]) => console.log(...arg),
  },
};

WebAssembly.instanceStreaming<IExports>(fetch("visualize.wasm"), importedObject)
  .then((result) => {
    console.log("YEAH");
  });