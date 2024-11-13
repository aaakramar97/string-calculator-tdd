export const add = (numbers) => {
    console.log("numbers", numbers);
    if (numbers === "") return 0;
    if (numbers.startsWith("-")) throw new Error("negative numbers not allowed");
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.)\n/);
        if (delimiterMatch) {
            delimiter = new RegExp(delimiterMatch[1]);
            numbers = numbers.slice(4);
        }
    }
    const numbersArray = numbers.split(delimiter);
    return numbersArray.reduce((acc, num) => acc + parseInt(num), 0);
};