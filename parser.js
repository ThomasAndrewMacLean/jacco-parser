const parse = (dottedKey, value, object) => {
  if (!object) object = {};
  if (!dottedKey || !value) return object;

  const array = dottedKey.split(".");
  dottedKey.split(".").reduce((accu, v, index) => {
    return index + 1 === array.length ? (accu[v] = value) : (accu[v] = {});
  }, object);

  return object;
};

module.exports = { parse };
