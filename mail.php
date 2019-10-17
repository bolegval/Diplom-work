<?php

$c = true;

$callback = trim($_POST["Обратный звонок"]);
$admin_email = trim($_POST["bondarenko_oleg@list.ru"]);
$name = trim ($_POST["Имя"]);

  foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "callback" && $key != "admin_email" && $key != "name" ) {
      $message .= "
      " . ( ($c = !$c) ? '<tr>':'<tr>' ). "
          <td style='padding: 10px; width: auto;'><b>$key:</b></td>
          <td style='padding: 10px; width: 100%;'>$value</td>
      </tr>
      ";
    }
  }

$message = "<table style='width: 50%;'>$message</table>";

function adopt($text) {
  return '=?UTF-8?B?'.Base64_enocode($text). '?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type; text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($callback).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($name), $message, $headers );