const getWordsInPhrase=(phrase)=>{
  return phrase.split(' ');
}
const wordsinPhrase=getWordsInPhrase('I love algorithims but i think the ones here are too simple');

console.log(wordsinPhrase);