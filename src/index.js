document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  // console.log(form);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputText = form.querySelector('#new-task-description').value;
    console.log(inputText);
    if (inputText == '') {
      // do nothing if input is blank
    }
    else {
      addToDo(inputText);
    }
    form.reset();
  })
});

function addToDo(task) {
  let li = document.createElement('p');
  let delBtn = document.createElement('button');
  delBtn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });
  delBtn.textContent = " X ";
  li.textContent = `${task} `;
  li.appendChild(delBtn);
  console.log(li);
  console.log(document.querySelector('#tasks'));
  document.querySelector('#tasks').appendChild(li);
}

// will revisit additional stretch deliverables if time allows 