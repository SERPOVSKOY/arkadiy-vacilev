<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require './src/Exception.php';
    require './src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language');
    $mail->IsHTML(true);

// От кого письмо
    $mail->setFrom('alexeiserpovskoi@yandex.ru', 'Администрация сайта');
// Кому отправить
    $mail->addAddress('serpovskoy.96@mail.ru');
// Тема письма
    $mail->Subject = 'Привет! Это Администрация сайта';
// Тело письма
    $body = '<h1>Заявка от нового пользователя<h1><p>';

    if (trim(!empty($_POST['name']))) {
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }

    if (trim(!empty($_POST['email']))) {
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }

    if (trim(!empty($_POST['phone']))) {
        $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
    }

    if (trim(!empty($_POST['text']))) {
        $body.='<p><strong>Текст:</strong> '.$_POST['text'].'</p>';
    }

    $mail->Body = $body;

    //Отправляем
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>