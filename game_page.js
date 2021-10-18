p1name = localStorage.getItem("player1");
p2name = localStorage.getItem("player2");
document.getElementById("player1name").innerHTML = p1name;
document.getElementById("player2name").innerHTML = p2name;
p1score = 0;
p2score = 0;
document.getElementById("player1score").innerHTML = p1score;
document.getElementById("player2score").innerHTML = p2score;
document.getElementById("player_question").innerHTML = "Question turn -" +p1name;
document.getElementById("player_answer").innerHTML = "Answer turn -" +p2name;
function send()
{
    word=document.getElementById("word").value;
    letter1 = word.charAt(1);
    console.log(letter1);
    len = Math.floor(word.length/2);
    letter2 = word.charAt(len);
    console.log(letter2);
    lenminus = word.length-1;
    letter3 = word.charAt(lenminus);
    console.log(letter3);
    rp1 = word.replace(letter1,"_");
    rp2=rp1.replace(letter2,"_");
    rp3=rp2.replace(letter3,"_");
    questionword="<h4 id='question'>Q."+rp3+"</h4>";
ipbox="<br> answer:<input type='text' id='ans'>"
checkbutton="<br><br><button class='btn btn-success' onclick='check()'>check</button>";
row=questionword + ipbox +checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn = "player1";
answer_turn = "player2";
function check()
{
    get_answer = document.getElementById("ans").value; 
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - "+answer);
    if(answer == word){
    if(answer_turn == "player1")
    {
        p1score = p1score +1;
        document.getElementById("player1score").innerHTML=p1score;
    }
    else{
        p2score = p2score +1;
        document.getElementById("player2score").innerHTML=p2score;   
    }
}
if(question_turn == "player1")
{
    question_turn="player2";
    document.getElementById("player_question").innerHTML="questionturn-"+p2name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="questionturn-"+p1name;
}
if(answer_turn == "player1")
{
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="answerturn-"+p2name;
}
else{
    answer_turn="player1";
    document.getElementById("answer_question").innerHTML="answerturn-"+p1name;
}
document.getElementById("output").innerHTML="";
}
