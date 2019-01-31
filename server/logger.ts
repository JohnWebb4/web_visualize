const shouldLogDebug = process.env.IS_DEBUG || false;

class Logger {
  public log(...rest: any[]) {
    if (shouldLogDebug) {
      // tslint:disable-next-line no-console
      console.log(...rest);
    }
  }
}

const logger = new Logger();

export { logger };
