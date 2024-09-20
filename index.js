function introduction(name) {
    console.log(`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

// Example usage:
introduction("Aki");
introductionWithLanguage("Aki", "Ember.js");
introductionWithLanguageOptional("Aki");
introductionWithLanguageOptional("Aki", "Python");