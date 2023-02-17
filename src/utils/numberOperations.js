export const invertNumber = number => {
  if (parseFloat(number) < 0) return Math.abs(parseFloat(number)).toString();
  if (parseFloat(number) === 0) return number == '0' ? '-0' : '0';
  return '-' + number;
};
