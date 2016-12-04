<?php

//Constant value for email
define("CONTACT_EMAIL", 'info@astroloft.com');

if ($_SERVER['REQUEST_METHOD'] === 'GET')
{
  header('Location: http://astroloft.com');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
  if (!empty($_POST['name']) || !empty($_POST['email']) || !empty($_POST['message']))
  {
    die(json_encode(array('status' => 0, 'message' => 'Not all fields have been completed')));
  }
  if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
  {
    die(json_encode(array('status' => 0, 'message' => 'You have not entered a valid email address')));
  }
  $headers = "From: webmaster@example.com";
  $subject = 'Contact Request';
  mail(CONTACT_EMAIL, $subject , $_POST['message'],$headers);
  die(json_encode(array('status' => 0, 'message' => 'Thanks for contacting Astroloft')));
}
