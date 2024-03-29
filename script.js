// let size = Number(prompt("Enter the size of grid:"));

// function to create divs in square format 
function creation(size){
    for(i=0;i<size;i++){
        const row = document.createElement("div");
        for(j=0;j<size;j++){
            const column = document.createElement("div");
            column.classList.toggle('column');
            row.appendChild(column);

        }
        row.classList.toggle('row');
        document.querySelector('.box').appendChild(row);
    }
    traceMouse();
}

// mouse tracing function for coloring divs 
function traceMouse(){
    let hover =document.querySelectorAll('.column');
    hover.forEach(function(singleBox){
    singleBox.addEventListener('mouseenter',color);
    });

    // 2nd Method to do same thing

    // let container = document.querySelector('.box');
    // container.addEventListener('mousemove', function(event){
    //     if (event.target.classList.contains('column')) {
    //         color();
    //         event.target.classList.add('hover');
    //     }
    // });
    
}

// color of the hovering div 
function color(event){
    if(flag=='black')
         event.target.style.backgroundColor = 'black';
    else if(flag=='rainbow')
        event.target.style.backgroundColor = randomColor();
 }
//  rainbow color generator , generates random color 
function randomColor(){
    let letter = '0123456789ABCDEF';
    let color = '#';
    for(i=0;i<6;i++){
        color = color + letter[Math.floor(Math.random()*16)];
    }
    return color;

}

//  turn on the control buttons event listner 
 function controlsOn(){
    let controls = document.querySelectorAll('button');
    controls.forEach(function(button){
        button.addEventListener('click',selection);
    });
    
 }

// Selection function for controls 
 function selection(event){
    let choice = event.target.id;
    switch(choice){
        case 'clear':
            clear();
            break;
        case 'rainbow':
            flag = 'rainbow';
            break;
        case 'black':
            flag = 'black';
            break;
        case 'resize':
            resize();
            break;   
    }
 }


//  function to clear all the box selected
 function clear(){
    let clear =document.querySelectorAll('.column');
    clear.forEach(function(singleBox){
    singleBox.style.backgroundColor = 'aliceblue';
    });
 }

 //  Resize prompt 
 function resize(){
    let size = Number(prompt("Enter the size of grid:"));
    let column = document.querySelectorAll('.column');
    column.forEach(function(del){
        del.remove();
    });
    let row= document.querySelectorAll('.row');
    row.forEach(function(del){
        del.remove();
    });
    creation(size);
 }
//  main function 
let flag = 'black';
resize();
controlsOn();