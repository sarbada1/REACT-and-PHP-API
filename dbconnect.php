<?php
class DbConnect {

    protected $host = "localhost";
    protected $dbname = "react-crud";
    protected $user = "root";
    protected $pass = "";

    public function connect() {

        try {

            $conn = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Corrected line
            return $conn;
        }
        catch (PDOException $e) {

            echo "Connection failed: " . $e->getMessage();
            return null;
        }
    }
}
?>
