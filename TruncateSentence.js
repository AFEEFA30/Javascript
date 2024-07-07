function truncateSentence(word, k) {
    let wordsArray = word.split(" ");
    let truncatedArray = wordsArray.slice(0, k);
    let truncatedSentence = truncatedArray.join(" ");
    return truncatedSentence;
}
let word = "What is the solution to this problem ";
let k=4
console.log(truncateSentence(word, 4));