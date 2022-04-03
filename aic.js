var downBop = [];

function random(words) {
   var random = Math.floor(Math.random() * words.length);
   return words[random]; 
}

function tagInText(text, tags, pas){
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
    if(!(pas == undefined)) {
        //console.log(downBop.join());
        if(downBop.join() == pas.join()) p = p && 1;
        else p = p && 0;
    }
    if(p) downBop = tags;
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

function inTextAll(text, tags) {
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
        if(index > -1) return text.slice(textE.indexOf(textE[index + 1]), text.length).join(" ");
    }
}

function LicBas(bop, meName) {
    if (tagInText(bop, [["привет", "здравствуй", "дорова", "хай"]])){
        return "Привет! Как дела?";
    }
    if (tagInText(bop, [["Пока", "Досвидания"]])) return "Уходи. Было весело!";
    if (tagInText(bop, [["Я", "Меня"]])){
        var name = inText(bop, ["зовут","Я"]);
        return `Очень приятно! ${name}`;
    }
    if (tagInText(bop, ["Как",["дела", "настроения", "жизнь"]])){
        return "Нормально!";
    }
    if (tagInText(bop, [["Нормально", "Плохо", "Хорошо"]], [["привет", "здравствуй", "дорова", "хай"]])) {
        return "У меня тоже";
    }
    if (tagInText(bop, ["Ты",["играл", "играла", "играешь", "проходил", "проходила", "проходиш"]])){
        var game = inText(bop, ["в", "проходил", "проходила", "проходиш"])
        return random([`Да, мне наравица игра ${game}`, `Мне не наравица игра ${game}`, `Я люблю игру ${game}`]);
    }
    if (tagInText(bop, ["Ты",["смотрела", "смотрел", "ходила", "ходил", "смотреть"]])){
        var game = inText(bop, ["кино", "сериал", "тв-шоу", "на", "смотрела", "смотрел", "смотреть"]);
        return random([`Да, мне наравица ${game}`, `Мне не наравица ${game}`, `Я люблю ${game}`]);
    }
    if (tagInText(bop, [["Ты", "Тебе"] ,["любишь", "нравица", "нравится"]])){
        var game = inText(bop, ["любишь", "нравица", "нравится"])
        return random([`Да, мне наравица`, `Мне не наравица`, `Я люблю`]);
    }
    if (tagInText(bop, [["Как", "Какое", "Кто"], ["зовут", "звать", "имя", "тебя", "ты"]])) {
         return `Меня зовут ${meName}!`;
    }
    if (tagInText(bop, [meName])) {
        return "А?";
    }
}