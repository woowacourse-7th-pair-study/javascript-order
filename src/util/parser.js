export const parseStringToArray = (input) =>
  input.split(',').map((item) => item.trim());

export const parseStringToOrder = (inputArray) => {
  return inputArray.map((input) => {
    const [menu, quantityStr] = input.split('(');

    const quantity = quantityStr.replace('개)', '');

    return { menu, quantity: Number(quantity) };
  });
};
