export function log(
  target: Object,
  methodKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("---method validator---");
  console.log({ target, methodKey, descriptor });
}
