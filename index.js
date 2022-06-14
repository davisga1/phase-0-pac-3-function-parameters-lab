function introduction(name) {
return (`Hi, my name is ${name}.`)
}
introduction(Samip)
function introductionWithLanguage(name, Language) {
    return (`Hi, my name is ${name} and I am learning to program in ${Language}.`)
}
function introductionWithLanguageOptional(name, language = "JavaScript") {

    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}