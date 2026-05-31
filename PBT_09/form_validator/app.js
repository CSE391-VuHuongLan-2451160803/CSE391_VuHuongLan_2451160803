const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const nameMsg = document.querySelector("#nameMsg");
const emailMsg = document.querySelector("#emailMsg");

let validName = false;
let validEmail = false;

function updateSubmit(){}

nameInput.addEventListener("input", () => {

    const value = nameInput.value.trim();

    if(value.length >= 2 && value.length <= 50){
        nameMsg.textContent = "✅ Hợp lệ";
        nameMsg.style.color = "green";
        validName = true;
    }else{
        nameMsg.textContent = "❌ Tên từ 2-50 ký tự";
        nameMsg.style.color = "red";
        validName = false;
    }

    updateSubmit();
});

emailInput.addEventListener("input", () => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(emailInput.value)){
        emailMsg.textContent = "✅ Email hợp lệ";
        emailMsg.style.color = "green";
        validEmail = true;
    }else{
        emailMsg.textContent = "❌ Email không hợp lệ";
        emailMsg.style.color = "red";
        validEmail = false;
    }

    updateSubmit();
});

const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");

const passwordMsg = document.querySelector("#passwordMsg");
const confirmMsg = document.querySelector("#confirmMsg");

const strengthFill = document.querySelector("#strengthFill");

let validPassword = false;
let validConfirm = false;

passwordInput.addEventListener("input", () => {

    const pass = passwordInput.value;

    const weak = pass.length < 8;

    const medium =
        pass.length >= 8 &&
        /[a-zA-Z]/.test(pass) &&
        /\d/.test(pass);

    const strong =
        pass.length >= 8 &&
        /[a-z]/.test(pass) &&
        /[A-Z]/.test(pass) &&
        /\d/.test(pass) &&
        /[^A-Za-z0-9]/.test(pass);

    if(weak){
        strengthFill.style.width="33%";
        strengthFill.style.background="red";
        passwordMsg.textContent="Yếu";
        validPassword=false;
    }
    else if(strong){
        strengthFill.style.width="100%";
        strengthFill.style.background="green";
        passwordMsg.textContent="Mạnh";
        validPassword=true;
    }
    else if(medium){
        strengthFill.style.width="66%";
        strengthFill.style.background="orange";
        passwordMsg.textContent="Trung bình";
        validPassword=true;
    }

    checkConfirm();
});

function checkConfirm(){

    if(
        confirmInput.value &&
        confirmInput.value === passwordInput.value
    ){
        confirmMsg.textContent="✅ Khớp";
        confirmMsg.style.color="green";
        validConfirm=true;
    }else{
        confirmMsg.textContent="❌ Không khớp";
        confirmMsg.style.color="red";
        validConfirm=false;
    }

    updateSubmit();
}

confirmInput.addEventListener("input", checkConfirm);