<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include "dbconnect.php"; // Corrected the file name

$obj = new DbConnect;
$conn = $obj->connect();


// Read the request body
$method=$_SERVER['REQUEST_METHOD'];
switch($method){
    case "GET":
        $sql="SELECT * from users";
        $path= explode('/',$_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])){
            $sql .= " WHERE id = :id";
            $stmt=$conn->prepare($sql);
            $stmt->bindParam(':id',$path[3]);
            $stmt->execute();
            $users=$stmt->fetch(PDO::FETCH_ASSOC);
          
        }
        else{

            $stmt=$conn->prepare($sql);
            $stmt->execute();
            $users=$stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($users);
        break;
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
    case "PUT":
        $requestData =json_decode( file_get_contents('php://input'));
        $sql="UPDATE users SET name=:name,email=:email,mobile=:mobile,updated_at=:updated_at WHERE id= :id";
        $stmt=$conn->prepare($sql);
        $updated_at=date('Y-m-d');
        $stmt->bindParam(':id',$requestData->id);
        $stmt->bindParam(':name',$requestData->name);
        $stmt->bindParam(':email',$requestData->email);
        $stmt->bindParam(':mobile',$requestData->mobile);
        $stmt->bindParam(':updated_at',$updated_at);
        if($stmt->execute()){
            $response=['status'=>1,'message'=>'Recorded Updated'];
        }
        else{
            $response=['status'=>1,'message'=>'Failed to update'];
        }
        break;


case "DELETE":
    $sql="DELETE from users where id=:id";
    $path= explode('/',$_SERVER['REQUEST_URI']);
    $stmt=$conn->prepare($sql);
    $stmt->bindParam(':id',$path[3]);
    $stmt->execute();
    if($stmt->execute()){
        $response=['status'=>1,'message'=>'Recorded Deleted'];
    }
    else{
        $response=['status'=>1,'message'=>'Failed to delete'];
    }
    break;
      
  

        }

        



?>
