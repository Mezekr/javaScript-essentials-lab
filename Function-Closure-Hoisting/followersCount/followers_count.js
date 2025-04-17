let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue()
}

function decreaseCount(){
    if(count <=0){
        count =0;
    } else{count--;}
    
    displayCount();
}

function resetCount(){
    count=0;
    alert("Your Instagram account Followers count reseted to 0.")
    document.getElementById('countDisplay').innerHTML=count;    
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if(count === 10){
        alert("Your Instagram account has 10 Followers! Congragulations")    
    }
    else if(count === 20){
        alert("Your Instagram account has 20 Followers! Keep it up")

    }
}