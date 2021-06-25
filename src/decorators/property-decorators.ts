import "reflect-metadata";
const formatMetadataKey = Symbol("format");

export function format(formatString: string) {
  console.log("---property decorator----");
  console.log({ formatString });
  return Reflect.metadata(formatMetadataKey, formatString);
}
export function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
