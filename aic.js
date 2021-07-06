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

function LicBas(bop) {
    if (tagInText(bop, [["привет", "здравствуй"]])){
        return "Привет! Как тебя зовут?";
    }
    if (tagInText(bop, [["Я", "Меня зовут"]])){
        var name = inText(bop, ["зовут","Я"]);
        return `Очень приятно! ${name}`;
    }
    if (tagInText(bop, ["Как",["дела", "настроения", "жизнь", ]])){
        return "Нормально!";
    }
    if (tagInText(bop, ["Ты",["играл", "играеш", "проходил", "проходиш"]])){
        var game = inText(bop, ["в", "проходил", "проходиш"])
        return `Да, мне наравица игра ${game}`;
    }
    if (tagInText(bop, ["Ты",["смотрела", "смотрел", "ходила в кинотеатыр", "ходила на"]])){
        var game = inText(bop, ["кино", "сериал", "тв-шоу", "на", "смотрел"]) 
        return `Да, мне наравица ${game}`
    }
    if (tagInText(bop, [["Как", "Какое", "Кто"], ["зовут", "звать", "имя", "тебя", "ты"]])) {
         return "Меня зовут ГлАДОС!";
    }
}