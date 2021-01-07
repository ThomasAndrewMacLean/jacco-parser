// we get a key and value, but key kan be joined
// by dots that need to be nested inside the object
// example: a.b and c should return this object => {a: {b: c}}
const parse = (dottedKey = "", value = "", object = {}) => {
  dottedKey.split(".").reduce((acc, v, index) => {
    return index + 1 === dottedKey.split(".").length
      ? v && (acc[v] = value)
      : (acc[v] = {});
  }, object);

  return object;
};

module.exports = { parse };
