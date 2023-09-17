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
    if( turn%2 && document.getElementById(id).innerHTML=='_'){
        document.getElementById(id).innerHTML = "X" ;
        if ( (turn>4) && (check_win("X")) ){
            //Animate a concluding statement about winner 
            console.log('yup');
        }
        turn++ ;
    }
    else if( turn%2==0 && document.getElementById(id).innerHTML=='_'){
        document.getElementById(id).innerHTML = "O" ;
        if( (turn>4) && check_win("O") ){
            //Animate a concluding statement about winner 
            console.log('yup');
        }
        turn++ ;
    }
    else{
        console.log('invalid choice');
    }
}

function check_win(sign){
    // var content =document.getElementById("0").innerHTML;
    // console.log(content,sign);
    // var i ;
    for( i=0;i<7;i++){
        if( (document.getElementById(i).innerHTML==sign) && (document.getElementById(i+1).innerHTML==sign)
             && (document.getElementById(i+2).innerHTML==sign) ){
                return true;
        }
    }
    for(i=0;i<3;i++){
        if((document.getElementById(i).innerHTML==sign) && (document.getElementById(i+3).innerHTML==sign)
             && (document.getElementById(i+6).innerHTML==sign)){
                return true;
        }
    }
    if( (document.getElementById(0).innerHTML==sign) && (document.getElementById(4).innerHTML==sign)
         && (document.getElementById(8).innerHTML==sign) ){
            return true;
    }
    if( (document.getElementById(2).innerHTML==sign) && (document.getElementById(4).innerHTML==sign)
         && (document.getElementById(6).innerHTML==sign) ){
            return true;
    }
    return false ;
}
