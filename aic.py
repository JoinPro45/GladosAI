def tagInText(text, tags):
    p = True
    for tag in tags:
        i = False
        for words in tag:
            word = words.lower()
            textE = text.lower()
            if word in textE:
                i = True
        p = p & i
    return p

def InText(text, tags):
    text = text + " " 
    for tag in tags:
        index = text.find(tag)
        endin = text.find(" ", index)
        end2 = text.find(" ", endin+1)
        if end2 != -1 and endin != -1: 
            return text[endin+1 : end2]

while 1:
    bop = input("Вопрос: ")
    if tagInText(bop, [["привет", "здравствуй"]]):
        print("Привет! Как тебя зовут?")
    if tagInText(bop, [["Я ", "Меня зовут"]]):
        name = InText(bop, ["зовут","Я"])
        print("Очень приятно! %s" % (name))
    if tagInText(bop, ["Как",["дела", "настроения"]]):
        print("Нормально!")
    if tagInText(bop, ["Ты",["играл", "играеш", "проходил", "проходиш"]]):
        game = InText(bop, ["в", "проходил", "проходиш"])
        print("Да, мне наравица игра %s" % (game))
    if tagInText(bop, ["Ты",["смотрел", "ходил в кинотеатыр", "ходил на"]]):
        game = InText(bop, ["кино", "сериал", "тв-шоу", "на", "смотрел"]) 
        print("Да, мне наравица %s" % (game))
    if tagInText(bop, [["Как", "Какое"], ["зовут", "звать", "имя", "тебя"]]):
        print("Меня зовут AIChar!Я бот")
    
    
    
