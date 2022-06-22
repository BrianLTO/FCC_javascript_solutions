//US telephone number validator
function telephoneCheck(str) {
  //only numbers, spaces and ()- allowed
  if (/[^0-9()-\s]+/.test(str)) return false;

  //format of number characters check
  if (!/.*[0-9]{3}.*[0-9]{3}.*[0-9]{4}/.test(str)) return false;
  if (str[0] === '1') {
    if (str.match(/[0-9]/g).length != 11) return false;
  } else {
    if (str.match(/[0-9]/g).length != 10) return false;
  }
  
  //correct use of parentheses check
  if (/[()]/g.test(str)) {
    if (!(/\(/.test(str)) | !(/\)/.test(str))) return false;
    let bracketNum = Math.max(str.match(/\(/g).length, str.match(/\)/g).length);
    if (bracketNum === 0) return false;
    if (!/\([0-9]{3,4}\)/g.test(str)) return false;
    if (str.match(/\([0-9]{3,4}\)/g).length != bracketNum) return false;
  }
  return true;
}

console.log(telephoneCheck("55 55-55-555-5"));