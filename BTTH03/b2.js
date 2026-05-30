// =========================
// DOM
// =========================

const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");

const modal = document.getElementById("taskModal");

const taskForm = document.getElementById("taskForm");

const taskList = document.getElementById("taskList");

const messageBox = document.getElementById("messageBox");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const modalTitle = document.getElementById("modalTitle");
const submitBtn = document.getElementById("submitBtn");

// Inputs

const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskDeadline = document.getElementById("taskDeadline");
const taskPriority = document.getElementById("taskPriority");

// =========================
// Data
// =========================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [

  {
    title: "Làm bài tập JavaScript",
    description: "Hoàn thành bài CRUD quản lý sinh viên",
    deadline: "2026-05-30",
    priority: "Cao",
    completed: false
  },

  {
    title: "Thiết kế giao diện",
    description: "Làm giao diện bằng CSS",
    deadline: "2026-05-28",
    priority: "Trung bình",
    completed: true
  },

  {
    title: "Học DOM",
    description: "Ôn lại querySelector và event",
    deadline: "2026-05-27",
    priority: "Thấp",
    completed: false
  },

  {
    title: "Làm project nhóm",
    description: "Phân chia công việc cho thành viên",
    deadline: "2026-06-01",
    priority: "Cao",
    completed: false
  },

  {
    title: "Deploy website",
    description: "Đưa project lên GitHub",
    deadline: "2026-05-26",
    priority: "Trung bình",
    completed: true
  }

];

let editIndex = -1;

// =========================
// Open / Close Modal
// =========================

function openForm() {
  modal.style.display = "flex";
}

function closeForm() {
  modal.style.display = "none";
  resetForm();
}

openModalBtn.addEventListener("click", () => {

  modalTitle.innerText = "Thêm công việc";

  submitBtn.innerText = "Lưu công việc";

  editIndex = -1;

  openForm();
});

closeModal.addEventListener("click", closeForm);

cancelBtn.addEventListener("click", closeForm);

// =========================
// Reset Form
// =========================

function resetForm() {

  taskForm.reset();

  editIndex = -1;
}

// =========================
// Save localStorage
// =========================

function saveTasks() {

  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}

// =========================
// Show Message
// =========================

function showMessage(text) {

  messageBox.innerText = text;

  messageBox.style.display = "block";

  setTimeout(() => {

    messageBox.style.display = "none";

  }, 3000);
}

// =========================
// Render Tasks
// =========================

function renderTasks() {

  taskList.innerHTML = "";

  if (tasks.length === 0) {

    taskList.innerHTML = `
      <div class="empty">
        Chưa có công việc nào
      </div>
    `;

    return;
  }

  tasks.forEach((task, index) => {

    let priorityClass = "";

    if (task.priority === "Cao") {
      priorityClass = "high";
    }

    else if (task.priority === "Trung bình") {
      priorityClass = "medium";
    }

    else {
      priorityClass = "low";
    }

    taskList.innerHTML += `
      <div class="task-card ${task.completed ? "completed" : ""}">

        <h3>${task.title}</h3>

        <p>${task.description}</p>

        <p>
          <strong>Hạn:</strong>
          ${task.deadline}
        </p>

        <span class="priority ${priorityClass}">
          ${task.priority}
        </span>

        <div class="task-actions">

          <button
            class="btn btn-status"
            onclick="toggleStatus(${index})"
          >
            ${task.completed ? "Chưa xong" : "Hoàn thành"}
          </button>

          <button
            class="btn btn-edit"
            onclick="editTask(${index})"
          >
            Sửa
          </button>

          <button
            class="btn btn-delete"
            onclick="deleteTask(${index})"
          >
            Xóa
          </button>

        </div>

      </div>
    `;
  });
}

// =========================
// Update Statistics
// =========================

function updateTaskSummary() {

  totalTasks.innerText = tasks.length;

  let completed = tasks.filter(task => task.completed).length;

  completedTasks.innerText = completed;

  pendingTasks.innerText = tasks.length - completed;
}

// =========================
// Submit Form
// =========================

taskForm.addEventListener("submit", function(e){

  e.preventDefault();

  const task = {

    title: taskTitle.value,
    description: taskDescription.value,
    deadline: taskDeadline.value,
    priority: taskPriority.value,
    completed: false
  };

  // Add

  if (editIndex === -1) {

    tasks.push(task);

    showMessage("Thêm công việc thành công");
  }

  // Update

  else {

    task.completed = tasks[editIndex].completed;

    tasks[editIndex] = task;

    showMessage("Cập nhật công việc thành công");
  }

  saveTasks();

  renderTasks();

  updateTaskSummary();

  closeForm();
});

// =========================
// Edit Task
// =========================

function editTask(index) {

  const task = tasks[index];

  taskTitle.value = task.title;
  taskDescription.value = task.description;
  taskDeadline.value = task.deadline;
  taskPriority.value = task.priority;

  editIndex = index;

  modalTitle.innerText = "Cập nhật công việc";

  submitBtn.innerText = "Cập nhật";

  openForm();
}

// =========================
// Delete Task
// =========================

function deleteTask(index) {

  const confirmDelete = confirm(
    "Bạn có chắc muốn xóa công việc này?"
  );

  if (!confirmDelete) return;

  tasks.splice(index, 1);

  saveTasks();

  renderTasks();

  updateTaskSummary();

  showMessage("Xóa công việc thành công");
}

// =========================
// Toggle Status
// =========================

function toggleStatus(index) {

  tasks[index].completed = !tasks[index].completed;

  saveTasks();

  renderTasks();

  updateTaskSummary();

  showMessage("Cập nhật trạng thái thành công");
}

// =========================
// Load Page
// =========================

renderTasks();

updateTaskSummary();