const reduceShape = (shape: Object) =>
  Object.entries(shape)
    .reverse()
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});

const capitalizeWords = (str: string) => {
  const words = str.split(" ");

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export { reduceShape, capitalizeWords, capitalizeFirstLetter };
