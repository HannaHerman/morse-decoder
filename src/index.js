const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = [];
  let arr = expr.split('');
  for (let i = (arr.length / 10); i > 0; i--) {
    let letterNumbers;
    let letterSymbols = [];
    let number = arr.length - 10;
    letterNumbers = arr.splice( number, 10 );
    if (letterNumbers.includes('*')) {
      result.push(' ');
    }
    else {
      for (let j = 0; j < letterNumbers.length; j += 2) {
        if (letterNumbers[j] == 1 && letterNumbers[j+1] == 0) {
          letterSymbols.push('.');
        }
        else if (letterNumbers[j] == 1 && letterNumbers[j+1] == 1) {
          letterSymbols.push('-');
        }
      }
      result.push(MORSE_TABLE[letterSymbols.join('')]);
    }
  }
  result = result.reverse().join('');
  return result;
}

module.exports = {
  decode
}