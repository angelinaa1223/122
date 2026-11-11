var randomBodyParts = ["глаз", "нос", "череп", "нога"];
var randAdjectives = ["Некрасивый", "Нефор", "Вонючка", "Какашка"]
var randWord = ["Бегемот", "Муха", "Крокодил", "Слон", "Муравей"]


function Generate(){
    var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
    var randomAdj = randAdjectives[Math.floor(Math.random() * 4)];
    var randomWords = randWord[Math.floor(Math.random() * 5)];
    
    document.getElementById("generateid").innerHTML = "У тебя " + randomBodyPart + " словно " + randomAdj + " " + randomWords + "!!!";
}
