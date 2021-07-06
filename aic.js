const { networkInterfaces } = require("node:os");

function tagInText(text, tags){
    var p = true;
    for (var tag in tags) {
        var i = false;
        if( typeof tags[tag] == "string" ) tags[tag] = [ tags[tag] ];
        for (var words in tags[tag]) {
            var word = tags[tag][words].toLocaleLowerCase();
            var textE = text.toLocaleLowerCase().split(" ");
            if (textE.indexOf(word) > -1) {
                i = true;
                console.log("Совподения!");
            }
            else console.log("Не собподеня!");
        }
        p = p && i;
    }
    return p
}

function inText(text, tags) {
    if( typeof tags == "string" ) tags = [tags];
    
    var textE = text.toLocaleLowerCase()
            .replace(",", "")
            .replace(".", "")
            .replace("?", "")
            .replace("!", "")
            .split(" ");
    text = text.replace(",", "")
            .replace(".", "")
            .replace("?", "")
            .replace("!", "")
            .split(" ");
    tags = tags.join().toLocaleLowerCase().split(",");
    
    for(var tag in tags) {
        var index = textE.indexOf(tags[tag]);
        if(index > -1) return text[index + 1];
    }
}

function LicBas(bop, meName) {
    if (tagInText(bop, [meName])) {
        return "А?";
    }
    if (tagInText(bop, [["привет", "здравствуй", "дорова", "хай"]])){
        return "Привет! Как тебя зовут?";
    }
    if (tagInText(bop, [["Пока", "До свидания"]])) return "Уходи. Было весело!";
    if (tagInText(bop, [["Я", "Меня зовут"]])){
        var name = inText(bop, ["зовут","Я"]);
        return `Очень приятно! ${name}`;
    }
    if (tagInText(bop, ["Как",["дела", "настроения", "жизнь", ]])){
        return "Нормально!";
    }
    /*
    if (tagInText(bop, ["Ты",["играл", "играеш", "проходил", "проходиш"]])){
        var game = inText(bop, ["в", "проходил", "проходиш"])
        return `Да, мне наравица игра ${game}`;
    }
    */
    if (tagInText(bop, ["Ты",["смотрела", "смотрел", "ходила в кинотеатыр", "ходила на", "ходил на", "ходил в кинотеатыр", "смотреть"]])){
        var game = inText(bop, ["кино", "сериал", "тв-шоу", "на", "смотрела", "смотрел", "смотреть"]);
        return `Да, мне наравица ${game}`;
    }
    if (tagInText(bop, [["Как", "Какое", "Кто"], ["зовут", "звать", "имя", "тебя", "ты"]])) {
         return `Меня зовут ${meName}!`;
    }
}