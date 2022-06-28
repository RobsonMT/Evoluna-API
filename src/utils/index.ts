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

const formatData = (data: Date | string) => {
  return data.toString().split("-").reverse().join("/");
};
export { reduceShape, capitalizeWords, capitalizeFirstLetter, formatData };
