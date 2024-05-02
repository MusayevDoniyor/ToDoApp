document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".task-add-div button");
  const inputField = document.querySelector(".task-add-div input");
  const tasksContainer = document.querySelector(".tasks-to-do-div");
  const doneTasksContainer = document.querySelector(".done-tasks");

  addButton.addEventListener("click", function () {
    const taskName = inputField.value;
    if (taskName.trim() !== "") {
      const newTask = createTaskElement(taskName);
      tasksContainer.appendChild(newTask);
      inputField.value = "";
    }
  });

  function createTaskElement(taskName) {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    const taskContent = document.createElement("span");
    taskContent.textContent = taskName;
    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("icons");

    const checkIcon = createIcon("bx bx-check");
    checkIcon.addEventListener("click", function () {
      newTask.classList.add("task-checked");
      doneTasksContainer.appendChild(newTask);
    });

    const editIcon = createIcon("bx bx-edit");
    editIcon.addEventListener("click", function () {
      const newTaskText = prompt("Edit Task:", taskContent.textContent);
      if (newTaskText !== null) {
        taskContent.textContent = newTaskText;
      }
    });

    const deleteIcon = createIcon("bx bx-trash");
    deleteIcon.addEventListener("click", function () {
      newTask.remove();
    });

    iconsDiv.append(checkIcon, editIcon, deleteIcon);
    newTask.append(taskContent, iconsDiv);
    return newTask;
  }

  function createIcon(className) {
    const icon = document.createElement("i");
    icon.className = className;
    return icon;
  }
});
