<?php

// Get Config.json
$config = file_get_contents('./src/config.js');

$config = strstr($config, "emails: {", false);

if(!preg_match_all('/".*?"|\'.*?\'/', $config, $emails)) {
	echo "syntax error in src/config.js, emails must be at the end.";
	exit();
}
$emails = $emails[0];

// HTTP Header
header('Content-Type: application/json');

// Get POST data from JSON
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// Get email adresses
$EmailFrom = Trim(stripslashes($_POST['email']));
$EmailTo = $emails;

// Create header
$headers = array("From: $EmailFrom",
    "Reply-To: " . $emails[0],
    "X-Mailer: PHP/" . PHP_VERSION
);
$headers = implode("\r\n", $headers);

// Get all data
$name = Trim(stripslashes($_POST['name']));
$email = Trim(stripslashes($_POST['email']));
$phone = Trim(stripslashes($_POST['phone']));
$message = Trim(stripslashes($_POST['message']));
$type = Trim(stripslashes($_POST['type']));
$service = Trim(stripslashes($_POST['service']));

// Set Subject
$subject = "Nouveau prospect sur Witify.io";

// Validation
$error = null;
if($message == "" || $message == null)
	$error = "message";
if($phone == "" || $phone == null)
	$error = "phone";
if($email == "" || $email == null)
	$error = "email";
if($name == "" || $name == null)
	$error = "name";
if($type == "" || $type == null)
	$type = "email";
if($service == "" || $service == null)
	$service = "name";

if ($error != null) {
	http_response_code(422);
	echo json_encode(array('success' => false, 'error' => $error));
	exit();
}

// Prepare email body text
$body = "";
$body .= "Name: ";
$body .= $name;
$body .= "\n";
$body .= "Email: ";
$body .= $email;
$body .= "\n";
$body .= "Phone: ";
$body .= $phone;
$body .= "\n";
$body .= "Message: ";
$body .= $message;
$body .= "\n";
$body .= "Type: ";
$body .= $type;
$body .= "\n";
$body .= "Service: ";
$body .= $service;
$body .= "\n";

// Send email 
/*foreach($EmailTo as $to) {
	$success = mail($to, $subject, $body, $headers);
}*/

$success = true;

// Check if email is successfully sent
if ($success) {
	echo json_encode(array('success' => true));
	exit();
}
else {
	http_response_code(500);
	echo json_encode(array('success' => false));
	exit();
}
?>