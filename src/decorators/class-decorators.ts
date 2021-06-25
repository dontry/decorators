export function sealed(constructor: Function) {
  console.log("class decorator - sealed");
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

export function reportable<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  console.log("---class validator---");
  return class extends constructor {
    reportingURL = "http://www.stackoverflow.com";
  };
}
