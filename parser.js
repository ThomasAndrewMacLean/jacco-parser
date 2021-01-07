const parse = (dottedKey = "", value = "", object = {}) => {
  dottedKey.split(".").reduce((acc, v, index) => {
    return index + 1 === dottedKey.split(".").length
      ? v && (acc[v] = value)
      : (acc[v] = {});
  }, object);

  return object;
};

module.exports = { parse };
