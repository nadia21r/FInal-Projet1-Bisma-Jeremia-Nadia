const todolist = [];

function hapusTodolist(){
    const bodyTodolist = document.getElementById("bodyTodolist");
    while(bodyTodolist.firstChild){
        bodyTodolist.removeChild(bodyTodolist.firstChild);
    }
}
function removeTodoList(index){
    todolist.splice(index, 1);
    tampilanTodolist();

}

function tambahTodolist(index,todo){
    const tr = document.createElement("tr");
    const tdButton = document.createElement("td");
    tr.appendChild(tdButton);

    const buttonDone = document.createElement("input");
    buttonDone.type= "button";
    buttonDone.value= "hapus";
    buttonDone.onclick = function(){
     removeTodoList(index);
    }; 
    tdButton.appendChild(buttonDone);


    const tdTodo = document.createElement("td");
    tdTodo.textContent =todo;
    tr.appendChild(tdTodo);

    const bodyTodolist = document.getElementById("bodyTodolist")
    bodyTodolist.appendChild(tr);
}

function tampilanTodolist(){

    hapusTodolist();
    
    for (let i = 0; i < todolist.length; i++) {
      const todo =  todolist[i];

      const searchText = document.getElementById("pencarian").value.toLowerCase();

      if(todo.toLowerCase().includes(searchText)){
        tambahTodolist(i,todo);
      }
        
    }
}

document.forms['formTodo'].onsubmit = function (event){
    event.preventDefault();

    const todo = document.forms['formTodo']['todo'].value;
    todolist.push(todo);

    document.forms['formTodo'].reset();
    console.info(todolist);
    tampilanTodolist();


};
const cariinput = document.getElementById("pencarian");
    cariinput.onkeyup = function (){
        tampilanTodolist();
    }
    cariinput.onkeydown = function (){
        tampilanTodolist();
    } 
tampilanTodolist();


