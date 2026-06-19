<?php
//응답을 json 형식으로 하겠다
header('Content-Type:application/json; charset=utf-8');

//MySQL DBMS와 연결하여 데이터들 가져오기
$db= mysqli_connect('localhost', 'mbca12345', 'a1s2a3f4!', 'mbca12345');//db주소, 접속아이디, 접속비번, db명
mysqli_query($db, 'set names utf8');

//web_board 테이블의 모든 데이터들을 번호기준 내림차 순으로 불러오는 SQL 쿼리문 작성
$sql="SELECT * FROM web_board ORDER BY no DESC";
mysqli_query($db, $sql);
$result= mysqli_query($db, $sql);

//리설트로부터 게시글 데이터들을 한줄씩 가져와서
$board_list=[];
//게시글의 수 만큼 반복핟여 한줄씩 데이터를 가져오기
$row_num= mysqli_num_rows($result);
for($i=0; $i<$row_num; $i++){
    $row=mysqli_fetch_array($result, MYSQLI_ASSOC);//연관 배열로 한줄 뽑기
    $board_list[$i]=$row;

}

//mySQL과 연결 종료
mysqli_close($db);

//$board_list의 요소 개수
$board_size= count($board_list);

//사용자에개 응답한 데이터들을 연관배열로 준비
$response=[];
$response['status']=200;//응답 성공 코드
$response['total']=$board_size;//총게시글 수
$response['date']=$board_list;//실제 데이터 배열

//위 연관배열을 json형식으로 변환하여 사용자에게 응답
echo json_encode($response);


?>