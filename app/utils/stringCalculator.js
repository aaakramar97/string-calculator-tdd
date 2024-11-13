export const add = (numbers) => {
    console.log("numbers", numbers);
    if (numbers === "") return 0;
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.)\n/);
        if (delimiterMatch) {
            delimiter = new RegExp(delimiterMatch[1]);
            numbers = numbers.slice(4);
        }
    }
    const numbersArray = numbers.split(delimiter);
    const negativeNumbers = numbersArray.filter((num) => parseInt(num) < 0);


    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed : ${negativeNumbers}`);
    }
    return numbersArray.reduce((acc, num) => acc + parseInt(num), 0);
};