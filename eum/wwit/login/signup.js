window.signup = function () {
    const id = document.querySelector("#id").value;
    const pw = document.querySelector("#pw").value;
    const pw2 = document.querySelector("#pw2").value;

    if (!id || !pw) {
        alert("아이디/비밀번호 입력하세요");
        return;
    }

    if (pw !== pw2) {
        alert("비밀번호가 일치하지 않습니다");
        return;
    }

    localStorage.setItem("userId", id);
    localStorage.setItem("userPw", pw);

    alert("회원가입 완료");
    location.href = "./login.html";
};

window.goLogin = function () {
    location.href = "./login.html";
};