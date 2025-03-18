export default function (rotateSide) {
  switch (rotateSide) {
    case 'half':
      return 45;
    case 'left':
      return 90;
    case 'right':
      return -90;
    case 'top':
      return 180;
    case 'bottom':
    default:
      return 0;
  }
}