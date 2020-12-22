<?php

/* https://api.telegram.org/bot1404733898:AAHFCjavbVKVCHx3deaBuE8L_cT-9bfsbIg/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$types = $_POST['types'];
$token = "1404733898:AAHFCjavbVKVCHx3deaBuE8L_cT-9bfsbIg";
$chat_id = "-463785885";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email:' => $email,
  'Пакет:' => $types
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>