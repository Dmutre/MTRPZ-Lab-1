class MarkDownParser {
  #preformattedText = [];

  replacePreformattedText(text) {
    const preformattedText = text.match(/```([\s\S]*?)```/g);
    console.log(preformattedText);
    this.#preformattedText.push(...preformattedText);
    return preformattedText.reduce(
      (acc, cur, index) => acc.replace(cur, `PRE{{${index}}}PRE`),
      text
    );
  }
}

module.exports = MarkDownParser;