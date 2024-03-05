module.exports = markups = [
  /(?<=[ ,.:;\n\t]|^)_(?=\S)/g,
  /(?<=\S)_(?=[ ,.:;\n\t]|$)/g,
  /(?<=[ ,.:;\n\t]|^)`(?=\S)/g,
  /(?<=[ ,.:;\n\t]|^)\*\*(?=\S)/g,
  /(?<=\S)\*\*(?=[ ,.:;\n\t]|$)/g,
  /(?=\S)`(?=[ ,.:;\n\t]|$)/g,
];