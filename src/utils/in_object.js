export default (object, key, defaultValue) =>
  object.hasOwnProperty(key) ? object[key] : defaultValue;
