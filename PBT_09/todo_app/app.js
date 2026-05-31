
console.log("Todo App");
const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

let todos = [];

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const text=input.value.trim();

    if(text==="") return;

    todos.push({
        id:Date.now(),
        text,
        completed:false
    });

    input.value="";

    render();
});

function render(){

    list.innerHTML="";

    todos.forEach(todo=>{

        const li=document.createElement("li");

        li.className="todo-item";

        li.dataset.id=todo.id;

        const span=document.createElement("span");

        span.textContent=todo.text;

        if(todo.completed){
            span.classList.add("completed");
        }

        const del=document.createElement("button");

        del.textContent="❌";

        del.className="delete";

        li.append(span);
        li.append(del);

        list.append(li);
    });

}

list.addEventListener("click",(e)=>{

    const li=e.target.closest("li");

    if(!li) return;

    const id=Number(li.dataset.id);

    if(e.target.classList.contains("delete")){

        todos=todos.filter(t=>t.id!==id);

        render();

        return;
    }

    if(e.target.tagName==="SPAN"){

        const todo=todos.find(t=>t.id===id);

        todo.completed=!todo.completed;

        render();
    }

});