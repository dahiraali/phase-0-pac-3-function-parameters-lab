function introduction(name) {
    return `Hi, my name is ${name}.`;
}

console.log(introduction("farhan"));

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("John", "Emper.js"));



function introductionWithLanguageOptional(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("John", "JavaScript"));
// Output: Hi, my name is John and I am learning to program in JavaScript.

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("Gracie"));


console.log(introductionWithLanguageOptional("Gracie", "javascript"));
