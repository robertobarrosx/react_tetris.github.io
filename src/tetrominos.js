export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  I: {
    shape: [
        [0, 'I', 0, 0], 
        [0, 'I', 0, 0], 
        [0, 'I', 0, 0], 
        [0, 'I', 0, 0]],
    color: '80, 227, 230',
  },
  J: { shape: [
      [0, 0, 0, 0], 
      [0,0, 'J',0], 
      [0,0, 'J',0], 
      [0,'J', 'J',0]
    ], color: '36, 95, 223' },
  L: {
    shape: [
        [0, 0, 0, 0], 
        [0, 'L', 0,0], 
        [0, 'L', 0,0], 
        [0, 'L', 'L',0]],
    color: '255, 140, 0',
  },
  O: { shape: [
       
      [0, 0, 0, 0], 
      [0,'O', 'O',0], 
      [0,'O', 'O',0],
      [0, 0, 0, 0]
    ], color: '255, 255, 0' },
  S: { shape: [
      [0, 0, 0, 0], 
      [0, 'S', 'S',0], 
      ['S', 'S', 0,0], 
      [0, 0, 0,0]], color: '48, 211, 56' },
  T: {
    shape: [
         
        [0,0, 0, 0], 
        ['T', 'T', 'T',0], 
        [0, 'T', 0,0],
        [0, 0, 0, 0]],
    color: '139, 0, 139',
  },
  Z: { shape: [
      [0, 0, 0, 0], 
      ['Z', 'Z', 0,0], 
      [0, 'Z', 'Z',0], 
      [0, 0, 0,0]
    ], color: '255, 20, 20' },
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
