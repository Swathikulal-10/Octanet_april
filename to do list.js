function addTodo() {
    var todoInput = document.getElementById("todo-input").value;
    if (todoInput === '') {
        alert("Please enter a task!");
        return;
    }
    var ul = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput));
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.setAttribute("onclick", "removeTask(this)");
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    document.getElementById("todo-input").value = '';
}

function removeTask(btn) {
    btn.parentNode.remove();
}