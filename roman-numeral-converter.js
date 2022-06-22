//decimal to roman numeral converter
function convertToRoman(num) {
  const table = {
    1000: 'M',
    900:  'CM',
    500:  'D',
    400:  'CD',
    100:  'C',
    90:   'XC',
    50:   'L',
    40:   'XL',
    10:   'X',
    9:    'IX',
    5:    'V',
    4:    'IV',
    1:    'I',
  }
  const cutOff = Object.keys(table).sort((a,b) => b-a);
  let roman = '';
  while (num > 0) {
    let target = cutOff.find((cut) => cut <= num);
    num -= target;
    roman = roman.concat(table[target]);
  }
  return roman;
}

console.log(convertToRoman(3842));