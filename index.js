
// Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок остальных элементов. Для написания алгоритма используйте JavaScript. 

// Массив, который нужно преобразовать: 

const moveZeros = [false,1,0,1,2,0,1,3,"a"]

const moveZerosFunc = (arr) => {
  const z = [];
  return arr
  .filter((e) => {
    if (e === 0) {
      z.push(0);
      return false;
    }
    return true;
  })
  .concat(z);
};
// Если нужно false приобразовать в 0 и поместить в конец, то можно на 12 строке сделать не строгое равенство и приоброзовать false в 0.

console.log(moveZerosFunc(moveZeros));

