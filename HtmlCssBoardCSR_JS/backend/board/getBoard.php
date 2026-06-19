<?php
    header('Content-Type:application/json; charset=utf-8');

    //사용자가 GET방식으로 요청한 게시글 번호
    $no= $_GET['no'];
    //web-
    $db=mysqli_connect('localhost','mbca12345','a1s2a3f4!', 'mbca1234');
    mysqli_query($db, 'set names utf8');

    //특정번호의 게시글 요청 쿼리문 작성
    $sql= "SELECT * FROM web_board WHERE no=$no";
    $result= mysqli_query($db, $sql);

    //결과표에 해당되는 게시글 1개만 
    $row= mysqli_array($result, MYSQLI_ASSOC);
    echo json_encode($row)
?>