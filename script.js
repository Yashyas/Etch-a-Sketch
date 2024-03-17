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
}

creation(size);