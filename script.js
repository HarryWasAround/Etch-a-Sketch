

const grid = document.getElementById('grid');

grid.style.cssText = `grid-template-columns: repeat(16, auto); grid-template-rows: repeat(16, auto);`
let count;

for (let i = 0; i < 16 * 16; i++) {
    count = grid.childElementCount;
    const item = document.createElement('div')
    item.classList.add('item');
    item.classList.add(`item${count}`);
    
    grid.appendChild(item);
}


//Event listener callback functions
let resetGrid  = () => {
    items.forEach((item) => {
        if (item.classList.contains('hovered')){
            item.classList.remove('hovered');
        }
    });
}
//


//Create a grid layout out of a certain number of divs that works just like the default one
let createDivs = (num) => {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    num =  prompt('Number of squares per side of the grid:')
    num = parseInt(num, 10);
    
    if (num > 100) {
        alert("Your imput exceeds the limit of 100 squares");
        return;
    }


    grid.style.cssText = `grid-template-columns: repeat(${num}, auto); grid-template-rows: repeat(${num}, auto);`

    for (let i = 0; i < num * num; i++) {
        count = grid.childElementCount;
        const item = document.createElement('div')
        item.classList.add('item');
        item.classList.add(`item${count}`);
        
        grid.appendChild(item);
    }
    
    changeToBlack();
}


//Element selectors
const edit = document.querySelector('.edit');
const reset = document.querySelector('.reset');
const items = document.querySelectorAll('.item');


//Change CSS of a div when hovering over one
function changeToBlack () {
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            e.target.classList.add('hovered');
            e.target.style.opacity = '0.1';

            e.target.addEventListener('mouseover', () => {
                switch (e.target.style.opacity) {
                    case '0.1':
                        e.target.style.opacity = '0.2';
                        break;
                    case '0.2':
                        e.target.style.opacity = '0.3';
                        break;
                    case '0.3':
                        e.target.style.opacity = '0.4';
                        break;
                    case '0.4':
                        e.target.style.opacity = '0.5';
                        break;
                    case '0.5':
                        e.target.style.opacity = '0.6';
                        break;
                    case '0.6':
                        e.target.style.opacity = '0.7';
                        break;
                    case '0.7':
                        e.target.style.opacity = '0.8';
                        break;
                    case '0.8':
                        e.target.style.opacity = '0.9';
                        break;
                    case '0.9':
                        e.target.style.opacity = '1';
                        break;
                }
            });   
        });
    });


    //Define the reset button event listener and its callback again in local scope
    let resetGrid  = () => {
        items.forEach((item) => {
            if (item.className.slice(-7) === 'hovered'){
                item.classList.remove('hovered');
                item.style.opacity = '0.1';
                item.style.removeProperty('opacity');
            }
        });
    }
    reset.addEventListener('click', resetGrid);
    //
}
changeToBlack();


//Global event listeners
reset.addEventListener('click', resetGrid);
edit.addEventListener('click', createDivs);