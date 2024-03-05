class MarkDownValidator {
  #markups;
  constructor(markups) {
    this.#markups = markups;
  }

  checkNesting(text, cases) {
    const parts = this.getMarkupParts(text, cases);
    for (const part of parts) {
      cases.map(({pattern}) => {
        const matches = part.match(pattern);
        if (matches) throw new Error('invalid markdown (nested markup)');
      });
    }
  }

  #getParts(text, cases) {
    const parts = [];
    for (const {pattern} of cases) {
      const matches = text.match(pattern);
      if (matches) {
        parts.push(...matches.map(match => match.replace(pattern, '$1')));
      }
    }
    return parts;
  }

  
}

module.exports = MarkDownValidator;