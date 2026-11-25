function countWords(sentence) {
    let words = sentence.trim().split(/\s+/);
    if (words[0] === "") {
        return 0;
    }
    return words.length;
}

console.log(countWords("I love learning JavaScript"));