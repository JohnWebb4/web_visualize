interface IResultObject<E> {
  module: any;
  instance: {
    exports: E;
  }
}

interface IImportedObject {
  imports: any;
}

declare class WebAssembly {
  public static instanceStreaming<E>(response: Promise<Response>, importedObject: IImportedObject): Promise<IResultObject<E>>;
}
