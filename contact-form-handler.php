<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];


	$email_from = 'mosaikmusik';

	$email_subject = "New Form Submission";

	$email_body = "User Name: $name.\n".
					"User Email: $visitor_email.\n".
						"User Message: $message.\n";


	$to = "audreysaudjhana16@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $visitor_email \r\n";

	if(mail($to,$email_subject,$email_body,$headers)){
		echo "<script>alert('Pesan anda berhasil dikirim. Terima kasih telah menghubungi kami.');history.go(-1);</script>";
	}else{
		echo "<script>alert('Pesan anda gagal dikirim, silakan mencoba lagi.');history.go(-1);</script>";
	}
?>