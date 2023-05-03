var imgs = document.getElementsByClassName("mouse");
var award = document.getElementById("award");
var award_place = [0,190,360]; // თასის სავარაუდო ადგილები
var pos = [25,25,25]; // თაგვების მდებარეობა მარცხნიდან
var maxpos = 25; //გამარჯვებულის მდებარეობა
var winner_index;
var counter_el = document.getElementById("counter"); //element(tag)
counter = 3;

function main(){
    f_counter();
}

function f_counter(){  
    if( counter > 0 ){    
        counter_el.textContent = counter;
        counter_el.style.display = "block";
        counter--;
        setTimeout(f_counter,1000);
    }
    else if(counter == 0){
        counter_el.textContent = "GO!";
        counter--;
        setTimeout(f_counter,800);
    }
    else{
        counter_el.style.display = "none";
        start();
    }
}

function start(){
    for(var i=0; i<imgs.length; i++){
        imgs[i].src = `img/${i+1}.gif`;
    }
    run();
}

function run(){
    var speed;

    if(maxpos<1100)
    {
        for(var i=0; i<imgs.length; i++){
            speed = Math.floor(Math.random() * 30) + 5;
            pos[i] += speed;
            imgs[i].style.left = pos[i]+"px"; 
            if(maxpos < pos[i]){
             maxpos = pos[i];
             winner_index = i;
            }
        }
        setTimeout(run,150);
    }
    else{
        stop_run(); 
        f_winner(winner_index); //functon for winner
    }     
    
}

function stop_run(){
    for(var i=0; i<imgs.length; i++){
        imgs[i].src = `img/${i+1}a.png`;
    }
}

function f_winner(index){ //functon for winner
    award.style.top = award_place[index] + "px";
    award.style.display = "block";
    counter_el.style.fontSize = '100px';
    counter_el.style.color = '#28a745';
    counter_el.innerHTML =`გამარჯებულია <br> ${imgs[index].title}!`;
    counter_el.style.display = "block";
}