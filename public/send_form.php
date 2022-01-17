<?php

if($_POST['g-recaptcha-response']) {
  $captcha = $_POST['g-recaptcha-response'];
  $secret = "6LcDmBQeAAAAADOEL0zfoXRA_5VKwnv0KQ96DKNt";

  $json = json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=". $secret . "&response=" . $captcha), true);

  if($json['success']) {
      echo "ok";
  } else {
      echo "recaptcha error";
  }
}  else {
    echo "Вы не ввели значение recaptcha";
}

 ?>