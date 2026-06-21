//
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

        // ✔ 로그인 상태 저장 (핵심)
        localStorage.setItem("loginUser", id);

        // ✔ 메인으로 이동
        location.href = "../tour.html";
    } else {
        alert("아이디 또는 비밀번호 틀림");
    }
};


//
// =======================
// 회원가입 페이지 이동
// =======================
window.goSignup = function () {
    location.href = "./signup.html";
};


//
// =======================
// 로그아웃
// =======================
window.logout = function () {
    // ✔ 로그인 상태 삭제
    localStorage.removeItem("loginUser");

    // ✔ 로그인 페이지로 이동
    location.href = "./login.html";
};