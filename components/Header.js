// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('temp');

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    const currentDate = (new Date()).toString().split(' ').filter((e, i) => (i === 1 || i === 2 || i === 3));

    date.innerHTML = `${currentDate[0].toUpperCase()} ${currentDate[1]}, ${currentDate[2]}`; 
    title.textContent = 'Lambda Times';
    temp.textContent = '98' + String.fromCharCode(176); 

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header;
}

document.querySelector('.header-container').appendChild(Header());