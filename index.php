<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include "dbconnect.php"; // Corrected the file name

$obj = new DbConnect;
$conn = $obj->connect();


// Read the request body
$method=$_SERVER['REQUEST_METHOD'];
switch($method){
    case "POST":
        $requestData =json_decode( file_get_contents('php://input'));
        $sql="INSERT into users(name,email,mobile,created_at) values(:name,:email,:mobile,:created_at)";
        $stmt=$conn->prepare($sql);
        $created_at=date('Y-m-d');
        $stmt->bindParam(':name',$requestData->name);
        $stmt->bindParam(':email',$requestData->email);
        $stmt->bindParam(':mobile',$requestData->mobile);
        $stmt->bindParam(':created_at',$created_at);
        if($stmt->execute()){
            $response=['status'=>1,'message'=>'Recorded Successfully'];
        }
        else{
            $response=['status'=>1,'message'=>'Failed to record'];
        }
        break;
        }

        


// Process the request data if needed
// For example, you can parse JSON data if that's what you're expecting
// $requestDataArray = json_decode($requestData, true);

// Create a response array

?>
