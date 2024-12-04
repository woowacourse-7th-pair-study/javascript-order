export const validateInputForm = (inputArray) => {
  inputArray.forEach((input) => {
    const [first, second] = input.split('(');
    if (!second) {
      throw new Error('[ERROR]');
    }
    const secondArray = second.split('');
    // first가 메뉴에 있는지

    if (secondArray.pop() !== ')') {
      throw new Error('[ERROR]');
    }

    if (secondArray.pop() !== '개') {
      throw new Error('[ERROR]');
    }

    if (Number.isNaN(Number(secondArray.join('')))) {
      throw new Error('[ERROR]');
    }
  });
};
