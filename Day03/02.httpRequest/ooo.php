<?php
    header('Content-Type:text/html; charset=utf-8');

    //1. 접속
     $db= mysqli_connect('localhost', 'mbca1234', 'a1s2a3f4!', 'mbca1234');

    //2. 한글깨짐 방지요청
    mysqli_query($db, 'set names utf8');

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

     //3. 데이터 삽입을 요청하는 쿼리문 작성 및 실행
    $sql= "INSERT INTO make(name, phone, email) VALUES('$name','$phone','$email')";
    $result=mysqli_query($db, $sql);
    if($result){
        echo "예약이 완료되었습니다";
    }else{
        echo "예약이 되지 않았습니다. <br>";
        echo mysqli_error($db);
    }

    //종료
    mysqli_close($db);

?>