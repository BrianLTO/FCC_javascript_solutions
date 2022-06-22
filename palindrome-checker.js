//Palindrome checker
//ignores all puntuation, case and spacing
function palindrome(str) {
  let strArr = str.toLowerCase().split('').filter(str => /[^\W_]/i.test(str));
  return strArr.join('') === strArr.slice().reverse().join('');
}

palindrome("A man, a plan, a canal. Panama");