export const add = (numbers) => {
    if (numbers === "") return 0;
    const numbersArray = numbers.split(/[,\n]+/);
    return numbersArray.reduce((acc, num) => acc + parseInt(num), 0);
};