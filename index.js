function capitalizeSentences(str) {
  let sentences = str.split('. ');
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    sentences[i] = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
  return sentences.join('. ');
}
module.exports = { capitalizeSentences };