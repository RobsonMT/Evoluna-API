const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;

const reduceShape = (shape: Object) =>
  Object.entries(shape)
    .reverse()
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});

const capitalize = (str: string) => {
  const words = str.split(" ");

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};

export { reduceShape, phoneRegex, capitalize };
