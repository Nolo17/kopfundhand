<?php
use PHPMailer\PHPMailer\PHPMailer;

//Load Composer's autoloader
//require 'vendor/autoload.php';

if(isset($_POST['name']) && isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];

    require_once "vendor/phpmailer/PHPMailer.php";
    require_once "vendor/phpmailer/SMTP.php";
    require_once "vendor/phpmailer/Exception.php";

    $mail = new PHPMailer();



    //smtp settings
    $mail->isSMTP();
    $mail->Host = 'smtp.mailtrap.io';
    $mail->SMTPAuth = true;
    $mail->Username = 'a8a42aefd561c3';
    $mail->Password = 'f3b78804749b6b';
    $mail->Port = 2525;
    $mail->SMTPSecure = 'tls';

    //email settings
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress("info@kopfundhand.berlin");
    $mail->Subject = ("$email ($subject)");
    $mail->Body = $body;
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER; 
    

    if($mail->send()){
        $status = "success";
        $response = "Email is sent!";
    }
    else
    {
        $status = "failed";
        $response = "Something is wrong: <br>" . $mail->ErrorInfo;
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
}

?>
      