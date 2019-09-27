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
    let arr =[];
    for( let i=0; i < expr.length; i++){
       for( let j = 0; j < Math.floor(expr.length / 10); j++){
           arr[j] = expr.slice((j*10), (j*10) + 10);
       }
    }
    
    let temp='';
    for(let i=0; i < arr.length; i++){
        arr[i] = arr[i].replace( /10/g, '.').replace( /11/g, '-').replace( /00/g, '');
    
        for( let key in MORSE_TABLE){
            if (arr[i] != '**********'){
                if (arr[i] == key){
                    temp+=MORSE_TABLE[key];
                    break;
                }
            }else{
                temp+=' ';
                break;
            }
        }
    }
    return temp;
}

module.exports = {
    decode
}