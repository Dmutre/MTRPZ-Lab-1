function markdown(data) {
  // Заміна жирного тексту
  data = data.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

  // Заміна курсивного тексту
  data = data.replace(/_(.*?)_/g, '<i>$1</i>');

  data = data.replace(/```\n([\s\S]*?)\n```/g, '<pre>$1</pre>');

  // Заміна моноширинного тексту
  data = data.replace(/`(.*?)`/g, '<tt>$1</tt>');

  return data;
}

module.exports = markdown;