<?php
if(isset($_FILES['img1'])){
    $file=$_FILES['img1'];

    echo "파일이름 : " . $file['name'] . '\n';
    echo "파일크기 : " . $file['size'] . '\n';
    echo "임시저장소 : " . $file['tmp_name'] . '\n';
    move_uploaded_file($file['tmp_name'], "./" . $file['name']);

    //문자열 데이터는 그냥 포스트 방식으로 전달
    $nickname= $_POST['nickname'];
    echo "닉네임 : $nickname";

}else{
    echo "이미지 없음";
}

?>