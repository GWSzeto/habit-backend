const convertFromSnakeToCamel = (snakeString: string): string => snakeString
  .split('')
  .reduce((camelString: string, char: string): string =>
    camelString[camelString.length - 1] === '_'
      ? camelString.substr(0, camelString.length - 1) + char.toUpperCase()
      : camelString + char
  , '');


const convertFromCamelToSnake = (camelString: string): string => camelString
  .split('')
  .reduce((snakeString: string, char: string): string => 
    char.toUpperCase() === char
      ? `${snakeString}_${char.toLowerCase()}`
      : snakeString + char
  , '');


const convertObject = (object: object, converter: (s: string) => string) => 
  Object.entries(object)
    .map(([key, value]: [string, string]): string[] => [converter(key), value])
    .reduce((convertedObject: object, [convertedKey, value]: string[]): object => ({
      ...convertedObject,
      [convertedKey]: value,
    }), {});


export default (object: object, inputCase: string, outputCase: string): any => {
  if (inputCase === 'camel' && outputCase === 'snake') return convertObject(object, convertFromCamelToSnake);
  if (inputCase === 'snake' && outputCase === 'camel') return convertObject(object, convertFromSnakeToCamel); 

  return object;
};