function sumbitBoard(){
    
    //from 요소는 action 속성이 없어도 sumbit이벤트가 발동하면
    //무조건 페이지 변경이 필요할 때 action없기에 현재문서를 새로고침함.
    //결국 페이지 변경되는 것임 이 기본 동작을 방지
    window.event.preventDefault();
    //써밋 버튼이 눌러지면 이 함수가 발동하는 확인
    //alert();

    //사용자가 입력한 값을 서버에 전송하여 web_board 테이블에 저장되도록 ajax 코드 작성
    var title= document.getElementById('in1').value;
    var write= document.getElementById('in2').value;
    var password= document.getElementById('in3').value;
    var message= document.getElementById('in4').value;
    //보낼 데이터를 key=value 형식으로 만들기 불편하니
    //json 형식으로 보내기(요즘 선호방식 -- 요청/응답 모두 json형식)

    //json을 형식의 문자열을 곧바로 만드는 것은 불편함, 그래서 먼저 js객체로 생성
    var date= {
        title: title,  //멤버변수명 : 값
        write : write, 
        password : password,
        msg:message
    }
    //jx개체를 json 문자열로 변환
    var jsonDate= JSON.stringify(date);//parse의 반대 기능
    //잘 되었는지 확인
    //alert(jsonDate);

    //ajax 기술로 서버에 위 데이터를 POST방식으로 전송하고 응답받기
    fetch('../backend/board/insertBoard.php',{
        method:'POST',
        headers:{'Content-Type': 'applcation/json'},
        body: jsonDate

    })
    .then(function(res){
        return res.text();

    })
    .then(function(text){
        alert(text);

        //서버 응답이 잘되었으니 다시 게시판 목록 화면(index.html화면으로 이동)
        window.location.href='../index.html'//url주소 변경
    })

    
}