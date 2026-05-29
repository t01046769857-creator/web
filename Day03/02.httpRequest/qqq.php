<?php
    header('Content-Type:text/html; charset=utf-8');

    //1. 접속
    $db= mysqli_connect('localhost', 'mbca1234', 'a1s2a3f4!', 'mbca1234');

    //2. 한글깨짐 방지요청
    mysqli_query($db, 'set names utf8');

   

?>