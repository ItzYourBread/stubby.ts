let numbers = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];

export function toSmallNumber(count: number, digits: number) {
  var result = '';
  var num = count;
  var i = 0;
  for (i = 0; i < digits; i++) {
    var digit = count % 10;
    count = Math.trunc(count / 10);
    result = numbers[digit] + result;
  }
  return result;
}
