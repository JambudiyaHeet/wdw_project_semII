function make_buttons() {
    for(i=0;i<9;i++){
        var ul = document.getElementById("list");
        var li = document.createElement("button");
        li.textContent = "_" ;
        li.setAttribute("id",""+i);
        li.setAttribute("onclick","Mark(this.id)");
        ul.appendChild(li);
    }
}

function pageloaded(){
    make_buttons();
}

function Mark(id){
    if( turn%2){
        turn++ ;
        document.getElementById(id).innerHTML = "X" ;
        if(check_win("X")){
            //Animate a concluding statement about winner 
        }
    }
    else{
        turn++ ;
        document.getElementById(id).innerHTML = "O" ;
        if(check_win("O")){
            //Animate a concluding statement about winner 
        }
    }
}

function check_win(){

}