//js를 이용하여 서버에서 게시글 목록 데이터를 불러와서 HTML로 그려내는 작업 수행
//js를 이용하여 웹문서의 DOM 요소 생성하여 그려내는 방식 CSR이라고 부름

//JS는 헤더에 추가되어 있고, 게시글은 추가해야 하는 table요소는 body에 있기에
//body가 완료된 후 DOM작업을 수행해야 함.

//방법 2가지
//1. body요소에 onload 이벤트 적용

//2. 외부스크립트일 경우 defer 속성을 적용


//연습을 목적으로 1번 방식으로 onload이벤트가 자동으로 실행될 함수 만들기
function onload(){
    //backend 서버에서 게시글 데이터들을 받아오기[데이터가 많기에 구별이 용이한 json형식으로 받기]
    //먼저 web_board 테이블에서 모든 데이터를 읽어와서 json으로 응답해주는 php 코드 작성

    //js에서 페이지의 변경없이  서버에서 데이터만 요청하는 기법을 ajax라고 부름
    //이 작업을 수행해주는 내장함수 fetch()

    //경로 주의 js파일 기준이 아니라 js를 연결한 .html 파일의 위치를 기준으로 상대경로
    fetch('./backend/board/loadBoardList.php')
    .then(function(response){
        return response.text();
    })
    .then(function(text){
        //잘 왔는지 확인
        //alert(text);

        //json 형식의 데이터를 js 객체로 변환하여 원하는 값들을 추출(분석 - parse)
        var json= JSON.parse(text);

        //js로 화면을 만들어 내기
        //1)게시글을 총 개수를 제목 영역에 표시
        var p= document.querySelector('.board_title>p');
        p.innerHTML= "자유롭게 게시글을 작성하며 이야기를 나누세요. [총 게시글 수 : " + json.total +"]";

        //2)읽어온 게시글 데이터들을 table의 하위 요소로 추가하기
        //데이터가 여러개 이므로 반복문으로 구성 파이썬의 for in처머
        for(board of json.date){//배열의 각 요소가 반복하여 추출됨
            //테이블에 추가될 <tr>요소와 데이터들을 만들기
            var row ="";
            row += "<tr>";
            row += `<td <td class="col_no">${board.no}</td>`;
            row += `<td class="col_title"><a href="./board/view.html?no=${board.no}></a>${board.title}</td>`;
            row += `<td class="col_writer">${board.write}</td>`;
            row += `<td class="col_date">${board.date}</td>`;
            row += `<td class="col_hits">${board.hits}</td>`;

            //table 요소의 자식으로 추가
            document.getElementsByClassName('board_list')[0].innerHTML += row;

        }//for.....
    })

}