const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");

const modal = document.getElementById("studentModal");

const studentForm = document.getElementById("studentForm");

const studentTableBody = document.getElementById("studentTableBody");

const messageBox = document.getElementById("messageBox");

const totalStudents = document.getElementById("totalStudents");
const classAverage = document.getElementById("classAverage");

const modalTitle = document.getElementById("modalTitle");
const submitBtn = document.getElementById("submitBtn");

// Inputs

const studentIdInput = document.getElementById("studentId");
const fullNameInput = document.getElementById("fullName");
const birthDateInput = document.getElementById("birthDate");
const classNameInput = document.getElementById("className");
const averageScoreInput = document.getElementById("averageScore");
const emailInput = document.getElementById("email");

// =========================
// Data
// =========================

let students = JSON.parse(localStorage.getItem("students")) || [];

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

  modalTitle.innerText = "Thêm sinh viên";

  submitBtn.innerText = "Lưu sinh viên";

  editIndex = -1;

  openForm();
});

closeModal.addEventListener("click", closeForm);

cancelBtn.addEventListener("click", closeForm);

// =========================
// Reset Form
// =========================

function resetForm() {

  studentForm.reset();

  editIndex = -1;
}

// =========================
// Save localStorage
// =========================

function saveStudents() {

  localStorage.setItem(
    "students",
    JSON.stringify(students)
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
// Render Students
// =========================

function renderStudents() {

  studentTableBody.innerHTML = "";

  if (students.length === 0) {

    studentTableBody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-row">
          Chưa có sinh viên nào
        </td>
      </tr>
    `;

    return;
  }

  students.forEach((student, index) => {

    studentTableBody.innerHTML += `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.birthDate}</td>
        <td>${student.className}</td>
        <td>${student.score}</td>
        <td>${student.email}</td>

        <td>

          <button
            class="btn btn-edit"
            onclick="editStudent(${index})"
          >
            Sửa
          </button>

          <button
            class="btn btn-delete"
            onclick="deleteStudent(${index})"
          >
            Xóa
          </button>

        </td>
      </tr>
    `;
  });
}

// =========================
// Statistics
// =========================

function updateStatistics() {

  totalStudents.innerText = students.length;

  if (students.length === 0) {

    classAverage.innerText = 0;

    return;
  }

  let total = 0;

  students.forEach(student => {

    total += Number(student.score);
  });

  let avg = total / students.length;

  classAverage.innerText = avg.toFixed(2);
}

// =========================
// Submit Form
// =========================

studentForm.addEventListener("submit", function(e){

  e.preventDefault();

  const student = {

    id: studentIdInput.value,
    name: fullNameInput.value,
    birthDate: birthDateInput.value,
    className: classNameInput.value,
    score: averageScoreInput.value,
    email: emailInput.value
  };

  // Add

  if (editIndex === -1) {

    students.push(student);

    showMessage("Thêm sinh viên thành công");
  }

  // Update

  else {

    students[editIndex] = student;

    showMessage("Cập nhật sinh viên thành công");
  }

  saveStudents();

  renderStudents();

  updateStatistics();

  closeForm();
});

// =========================
// Edit Student
// =========================

function editStudent(index) {

  const student = students[index];

  studentIdInput.value = student.id;
  fullNameInput.value = student.name;
  birthDateInput.value = student.birthDate;
  classNameInput.value = student.className;
  averageScoreInput.value = student.score;
  emailInput.value = student.email;

  editIndex = index;

  modalTitle.innerText = "Cập nhật sinh viên";

  submitBtn.innerText = "Cập nhật";

  openForm();
}

// =========================
// Delete Student
// =========================

function deleteStudent(index) {

  const confirmDelete = confirm(
    "Bạn có chắc muốn xóa sinh viên này?"
  );

  if (!confirmDelete) return;

  students.splice(index, 1);

  saveStudents();

  renderStudents();

  updateStatistics();

  showMessage("Xóa sinh viên thành công");
}

// =========================
// Load Page
// =========================

renderStudents();

updateStatistics();