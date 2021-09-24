class Formatter {
  static capitalize(letter){
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  }
  //add static methods here

  static sanitize(letter){
    return letter.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  //'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'
  static titleize(word){
    let wordSplit = word.split(" ");
    let arr = [];
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    
    for (let i = 0; i < wordSplit.length; i++) {
      if (i === 0) {
        arr.push(this.capitalize(wordSplit[i]))
      } else {
          if (exceptions.includes(wordSplit[i])){
            arr.push(wordSplit[i])
      } else { 
        arr.push(this.capitalize(wordSplit[i]))
      }
      }
    }
    return arr.join(" ");

  }
}