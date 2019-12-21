<?php
 $productName = $_POST['pdname'];
 foreach ($_FILES['upload']['name'] as $f => $name) {   
    $uploadFile = $_FILES['upload']['name'][$f];
    echo $uploadFile;
    $fileinfo = pathinfo($uploadFile);
    $ext = $fileinfo['extension'];   #확장자명 구하기

    $imgSrc = "./images/" . $productName . $f . "." . $ext;
    if(move_uploaded_file($_FILES['upload']['tmp_name'][$f], $imgSrc)){
        echo "파일이 업로드 되었습니다.";
        echo "<img src ={$imgSrc}> <p>";
        echo "1. file name : {$productName} <br />";
        echo "2. file type : {$_FILES['upload']['type']}<br />";
        echo "3. file size : {$_FILES['upload']['size']} byte <br />";
        echo "<br />";
    }else{
        echo 'error';
    }
 }
?>