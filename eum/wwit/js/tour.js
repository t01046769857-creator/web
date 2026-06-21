// 검색어 입력코드
document.querySelector(".search-icon").addEventListener("click", function () {
    const keyword = document.getElementById("in1").value.trim();

    if (!keyword) {
        alert("검색어를 입력하세요");
        return;
    }

    alert("검색: " + keyword);
});

// 인기 검색어
document.querySelector(".hot-keyword h2").addEventListener("click", function () {
    this.parentElement.classList.toggle("open");
});

// 로그인 상태 확인
window.addEventListener("DOMContentLoaded", function () {

    const user = localStorage.getItem("loginUser");
    const loginMenu = document.querySelector("#loginMenu");

    if (!loginMenu) return;

    if (user) {

        loginMenu.innerHTML = `
            <img src="./image/user.png" alt="user">
            <span>${user}님</span>
        `;

        loginMenu.addEventListener("click", function () {

            if (confirm("로그아웃 하시겠습니까?")) {
                localStorage.removeItem("loginUser");
                location.reload();
            }

        });

    }

});