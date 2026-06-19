// 상세글 보기화면은 목록에서 선택될 때 게시글 번호 (no)를 url로 전달받음

//url로 전달된 no갑 취득하기
//alert(window.location.href);//모든 경로나옴
//alert(window.location.search);//?뒤에 전달되 파리미터 값들 만 선택됨.

//번호 숫자만 필요하니 '='글자를 기준으로 분리
var no= location.search('=')[1];
//확인
//alert(no);

//서버의 web_board 테이블에서 no 번호에해당하는 게시글 1개를 json형식으로 받기
var url=`../backend/board/getBoard.php?no=${no}`;
fetch(url)
.then(function(res){return res.json()})//json객체로
.then(function(json){
    //alert(json.title);

    document.querySelectorALL('./board_view .title')[0].innerHTML=json.title;

    document.querySelectorAll('./board_view .info .col1')[0].innerHTML= json.no;

    document.querySelector('./board_view .info .col2').innerHTML= json.writer;
    document.querySelector('./board_view .info .col3').innerHTML= json.date;
    document.querySelector('./board_view .info .col4').innerHTML= json.hits;
    document.querySelector('./board_view .content').innerHTML= json.msg;


   
})
