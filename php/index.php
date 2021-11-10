<?php
$errorMSG = "";

if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}
if (empty($_POST["sname"])) {
    $errorMSG = "surname is required ";
} else {
    $sname = $_POST["sname"];
}
if (empty($_POST["email"])) {
    $errorMSG = "email is required ";
} else {
    $email = $_POST["email"];
}
if (empty($_POST["country"])) {
    $errorMSG = "country is required ";
} else {
    $country = $_POST["country"];
}
if (empty($_POST["phone"])) {
    $errorMSG = "phone is required ";
} else {
    $phone = $_POST["phone"];
}
if (empty($_POST["terms"])) {
    $errorMSG = "Terms is required ";
} else {
    $terms = $_POST["terms"];
}
$EmailTo = "info@thenoq.co";
$Subject = "Новая заявка на thenoq.co";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "\n";
$Body .= "Country: ";
$Body .= $country;
$Body .= "\n";
$Body .= "Terms: ";
$Body .= $terms;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From: info@thenoq.co");

if ($success && $errorMSG == ""){
    echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
   } else {
     echo $errorMSG;
  }
}


?>
