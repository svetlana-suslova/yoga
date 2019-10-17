<?php
$to = "weblove.studio@gmail.com";
$theme = "Новый заказ с сайта YOGA";
$from_yoga = "YOGA";
$from_phone = $_POST['phone'];
$message .= "Номер телефона: " .$_POST['phone']. "<br>";
$message .= "Email: " .$_POST['email']. "<br>";
$headers = "From: <$from_yoga>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
$result = mail($to, $theme, $message, $headers);

if ($result){
	  header('location: /yoga/');
}
else {
	echo "Error";
}

?>
