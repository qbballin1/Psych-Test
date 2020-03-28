let questions = [{
    prompt: "Whats 2+2",
    choiceA: "img",
    choiceB: "img",
    choiceC: "img",
    Correct: "4"
},{
    prompt: "Whats 2+2",
    choiceA: "img",
    choiceB: "img",
    choiceC: "img",
    Correct: "4"
},{
    prompt: "Whats 2+2",
    choiceA: "img",
    choiceB: "img",
    choiceC: "img",
    Correct: "4"
},{
    prompt: "Whats 2+2",
    choiceA: "img",
    choiceB: "img",
    choiceC: "img",
    Correct: "4"
}];

var indexCounter = 0;
var lastquestion = questions.length - 1


function questionCounter(){    //functions works however does not itterate on the 0th index but is ready to deploy
   let q = questions[indexCounter];
        for(indexCounter; indexCounter < lastquestion; indexCounter++)
         if(q.Correct == answer){ 
            score++
    }else{
        console.log("wrong answer")
    }
       
};

questionCounter(); 
