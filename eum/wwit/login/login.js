// =======================
// 회원가입
// =======================
window.signup = function () {
    const id = document.querySelector("#id").value;
    const pw = document.querySelector("#pw").value;

    if (!id || !pw) {
        alert("아이디/비밀번호 입력하세요");
        return;
    }

    localStorage.setItem("userId", id);
    localStorage.setItem("userPw", pw);

    alert("회원가입 완료");
    location.href = "./login.html";
};


// =======================
// 로그인
// =======================
window.login = function () {
    const id = document.querySelector("#id").value;
    const pw = document.querySelector("#pw").value;

    const savedId = localStorage.getItem("userId");
    const savedPw = localStorage.getItem("userPw");

    if (id === savedId && pw === savedPw) {
        alert("로그인 성공!");

        location.href = "../tour.html"; // ✔ 메인 이동
    } else {
        alert("아이디 또는 비밀번호 틀림");
    }
};


// =======================
// 회원가입 페이지 이동
// =======================
window.goSignup = function () {
    location.href = "./signup.html";
};


// =======================
// 로그아웃
// =======================
window.logout = function () {
    location.href = "./login/login.html";
};