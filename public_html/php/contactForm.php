<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from ='contact@simonbonnedahl.dev';

    $email_subject = "Contact Form Submission";

                  
    $to = "contact@simonbonnedahl.dev";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
    
    $headers .= 'From: ' . $name . "\r\n";
    $headers .= 'Reply-To: ' .$visitor_email . "\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();

    mail($to,$email_subject,$message,$headers);
    
    header("location: ../thankyou/");
?>