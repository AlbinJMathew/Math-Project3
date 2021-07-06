player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score; 

document.getElementById("player_question").innerHTML = player1_name;
document.getElementById("player_answer").innerHTML = player2_name; 

function send()
{
    get_number1 = document.getElementById("Number_1").value;

    get_number2 = document.getElementById("Number_2").value;

    actual_answer = parseInt(get_number1) * parseInt(get_number2);
 
    question_number = "<h4>" + get_number1 + "X" + get_number2 + "<h4>";
    input_box = "<br>Answer : <input type='text' id='input_checkbox'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number_1").value = "";
    document.getElementById("Number_2").value = "";
}