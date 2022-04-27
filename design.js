// getting the elements of the DOM saved into a variable
const list = document.querySelector('.list');
const submitBtn = document.querySelector('.btn1');
const clearListBtn = document.querySelector('.btn2');
const input = document.querySelector('input');

// added an event listener to a button
submitBtn.addEventListener('click', () => {
    const nextNumber = list.children.length + 1;
    // created an element
    const li = document.createElement('li');
    li.innerText = `${nextNumber}. `; // adding a value to the DOM element 
    list.appendChild(li); // appending a child to a parent
    const span = document.createElement('span');
    span.innerText = input.value
    li.appendChild(span);
    const xBtn = document.createElement('button');
    xBtn.innerText = 'x';
    xBtn.addEventListener('click', () => li.remove())
    li.appendChild(xBtn);
    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done';
    li.appendChild(doneBtn);
    doneBtn.addEventListener('click', () => li.style.textDecoration = 'line-through');
    input.value = '';
})

clearListBtn.addEventListener('click', () => list.innerHTML = '' )
