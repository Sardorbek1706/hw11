let ToDoList = {
    tasks: [],
    addTask: function(task) {
        this.tasks.push(task);
    },
    removeTask: function(id) {
        this.tasks.splice(id, 1);
    },
    printTasks: function() {
        console.log(this.tasks);
    }
};

function runToDo() {
    ToDoList.addTask("Kitob o‘qish");
    ToDoList.addTask("Uy vazifasini qilish");
    ToDoList.addTask("Sport zaliga borish");
    ToDoList.printTasks();
    ToDoList.removeTask(1);
    ToDoList.printTasks();
}

runToDo();
