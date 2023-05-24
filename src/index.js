document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  //const task = document.body.querySelector("input#new-task-description"); 
  const form = document.body.querySelector("form#create-task-form");
  //console.log(form);
  console.log(e);
  form.addEventListener("submit",submitToDo);
  //const button = document.body.querySelector
  const uList = document.body.querySelector("ul#tasks");
  uList.addEventListener("click",delLine);
  init ();
});


function submitToDo(e) {
  e.preventDefault();
  //console.log(e);
  const uList = document.body.querySelector("ul#tasks");
  //const uList = e.target.tasks.value;
  const list = document.createElement("li");
  const input = document.querySelector("input#new-task-description").value;
  list.textContent = input;
  const button = document.createElement("button");
  button.textContent = "Del";
  button.className = "delButton";
  //button.style.
  //list.document.createElement("button");
  list.appendChild(button);
  uList.appendChild(list);
  document.querySelector("input#new-task-description").value = '';
}

function delLine (e) {
  //e.preventDefault();
  //get upper lvl node. parentNode
  const listItem = e.target.parentNode;
  console.log(listItem);
  //const list = listItem.parentNode;
  //console.log(list);
  //list.removeChild(listItem);
  listItem.remove();
}

function init() {
  //create event listener for every newly created Del button
  const buttons = document.body.querySelectorAll(".delButton");
  buttons.forEach(button => button.addEventListener('click', delLine));
}