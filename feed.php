<?php
header("Location: ./index.html");
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '', 'real');
// get the post records
$txtTitle = $_POST['email'];
$txtAuthor = $_POST['message'];
// database insert SQL code
$sql = "INSERT INTO `input` (`Email`, `Message`)
VALUES ('$txtTitle', '$txtAuthor')";// insert in database
$rs = mysqli_query($con, $sql);
if($rs)
{
echo "Contact Records Inserted";
}
else {
echo "error";
}
?>

