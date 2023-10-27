function make_buttons() {
    for (i = 0; i < 9; i++) {
        var ul = document.getElementById("list");
        var li = document.createElement("button");
        li.textContent = "_";
        li.setAttribute("id", "" + i);
        li.setAttribute("onclick", "Mark(this.id)");
        ul.appendChild(li);
    }
}

function pageloaded() {
    make_buttons();
}

function Mark(id) {
    if (turn % 2 && document.getElementById(id).innerHTML == "_") {
        document.getElementById(id).innerHTML = "X";
        document.getElementById(id).style.backgroundColor = "rgb(79, 125, 149)";
        document.getElementById(id).style.color = "#fffdfd";
        if (turn > 4 && check_win("X")) {
            console.log("yup");
        }
        turn++;
    } else if (turn % 2 == 0 && document.getElementById(id).innerHTML == "_") {
        document.getElementById(id).innerHTML = "O";
        document.getElementById(id).style.backgroundColor = "rgb(214, 102, 102)";
        document.getElementById(id).style.color = "#fffdfd";
        if (turn > 4 && check_win("O")) {
            console.log("yup");
        }
        turn++;
    } else {
        console.log("invalid choice");
    }
    if (over === 0) {
        console.log(over, 25);
        animewinner();
    }
}
function check_win(sign) {
    for (i = 0; i < 7; i++) {
        if (
            document.getElementById(i).innerHTML == sign &&
            document.getElementById(i + 1).innerHTML == sign &&
            document.getElementById(i + 2).innerHTML == sign
        ) {
            over = 0;
            return true;
        }
    }
    for (i = 0; i < 3; i++) {
        if (
            document.getElementById(i).innerHTML == sign &&
            document.getElementById(i + 3).innerHTML == sign &&
            document.getElementById(i + 6).innerHTML == sign
        ) {
            over = 0;
            return true;
        }
    }
    if (
        document.getElementById(0).innerHTML == sign &&
        document.getElementById(4).innerHTML == sign &&
        document.getElementById(8).innerHTML == sign
    ) {
        over = 0;
        return true;
    }
    if (
        document.getElementById(2).innerHTML == sign &&
        document.getElementById(4).innerHTML == sign &&
        document.getElementById(6).innerHTML == sign
    ) {
        over = 0;
        return true;
    }
    return false;
}
function animewinner() {
    var win = document.createElement("div");
    win.setAttribute("class", "winner");
    win.textContent = "Congratulations!";
    var playagain = document.createElement("button");
    playagain.setAttribute("id", "playagain");
    playagain.textContent = "Play Again";
    playagain.setAttribute("onclick", "reload()");
    var br = document.createElement("br");
    win.appendChild(br);
    win.appendChild(playagain);
    document.body.appendChild(win);
    var ul = document.getElementById("list");
    ul.parentNode.removeChild(ul);
    console.log("changed zIndex of winner");
}
function reload() {
    location.reload();
}
