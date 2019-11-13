<?php
$to = "bondarenko_oleg@list.ru"; 
$tema = "Форма обратной связи на PHP"; 
$message = "Ваше имя: ".$_POST['name']."<br>";
$message .= "Номер телефона: ".$_POST['phone']."<br>"; 
$headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
  
if (mail($to, $tema, $message, $headers)) {
  echo ('Успешно отправлено!');
}
else {
  echo ('Ошибка!');
}

?>