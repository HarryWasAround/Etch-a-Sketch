//Append a number divs evenly to 'container'

let createDivs = (num) => {
    num =  prompt('Number of squares per side of the grid:')
    num = parseInt(num, 10);
    
    if (num > 100) {
        alert("Your imput exceeds the limit of 100 squares");
        return;
    }

    const container = document.getElementById('container');

    container.style.cssText = `grid-template-columns: repeat(${num}, auto); grid-template-rows: repeat(${num}, auto);`
    let count;

    for (let i = 0; i < num * num; i++) {
        count = container.childElementCount;
        const item = document.createElement('div')
        item.classList.add('item');
        item.classList.add(`item${count}`);
        
        container.appendChild(item);
    }
}

createDivs();

let changeToBlack = () => {
    const items = document.querySelectorAll('div');
    items.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            itemClass = `${e.target.className}`;
            itemClass = itemClass.substr(5);
            let square = document.querySelector(`.${itemClass}`); 
            square.style.cssText = "background-color: black; opacity: 1;";
        });
    });
}

changeToBlack();