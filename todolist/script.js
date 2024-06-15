function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function() {
        this.classList.toggle("completed");
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        this.parentElement.remove();
    });
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function downloadTasks() {
    var tasks = [];
    var taskElements = document.querySelectorAll("#taskList li");
    taskElements.forEach(function(taskElement) {
        tasks.push(taskElement.textContent);
    });

    var blob = new Blob([tasks.join("\n")], { type: "text/plain" });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "tasks.txt";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}
