let size = Number(prompt("Enter the size of grid:"));

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
function color(event){
    event.target.classList.add('hover');
    console.log("hovered"+count);
    count++;

 }
let count = 0;
creation(size);