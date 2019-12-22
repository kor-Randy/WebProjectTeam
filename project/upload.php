<?php
 $productName = $_COOKIE["pdid"];
 foreach ($_FILES['upload']['name'] as $f => $name) {   
    $uploadFile = $_FILES['upload']['name'][$f];
    $fileinfo = pathinfo($uploadFile);
    $ext = $fileinfo['extension'];   #확장자명 구하기

    $imgSrc = "./images/" . $productName ."_". $f . ".jpg";
    if(move_uploaded_file($_FILES['upload']['tmp_name'][$f], $imgSrc)){
        
    }else{
    }
 }
 $prevPage = $_SERVER['HTTP_REFERER'];

header('location:'.$prevPage);  // 페이지 이동
?>
