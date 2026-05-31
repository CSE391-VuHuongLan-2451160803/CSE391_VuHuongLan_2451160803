
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

    let filtered=todos;

if(currentFilter==="active"){
    filtered=todos.filter(
        t=>!t.completed
    );
}

if(currentFilter==="completed"){
    filtered=todos.filter(
        t=>t.completed
    );
}

filtered.forEach()
updateCount();
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

let currentFilter="all";
document
.querySelector(".filters")
.addEventListener("click",(e)=>{

    if(e.target.dataset.filter){

        currentFilter=e.target.dataset.filter;

        render();
    }

});

function updateCount(){

    const active=todos.filter(
        t=>!t.completed
    ).length;

    document.getElementById("count")
    .textContent=`${active} items left`;

}

document
.getElementById("clearCompleted")
.addEventListener("click",()=>{

    todos=todos.filter(
        t=>!t.completed
    );

    render();

});

function saveTodos(){

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

}
function loadTodos(){

    const data=
        localStorage.getItem("todos");

    if(data){

        todos=JSON.parse(data);

    }

}
loadTodos();
render();
saveTodos();
list.addEventListener("dblclick",(e)=>{

    if(e.target.tagName!=="SPAN") return;

    const li=e.target.closest("li");

    const id=Number(li.dataset.id);

    const todo=todos.find(
        t=>t.id===id
    );

    const inputEdit=
        document.createElement("input");

    inputEdit.value=todo.text;

    e.target.replaceWith(inputEdit);

    inputEdit.focus();

    inputEdit.addEventListener(
        "keydown",
        (event)=>{

            if(event.key==="Enter"){

                todo.text=inputEdit.value;

                saveTodos();

                render();

            }

        }
    );

});