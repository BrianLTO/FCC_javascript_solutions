//Caesars cipher decoder
function rot13(str) {
  return str.split('').map((char) => {
    if (!/[A-Z]/.test(char)) return char;
    else {
      return String.fromCharCode((char.charCodeAt(0)-65+13)%26+65);
    }
  }).join('');
}

console.log(rot13("SERR PBQR PNZC"));