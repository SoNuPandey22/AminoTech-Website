


<?php

  /* DATABASE CONNECTION*/


        $host= 'localhost';
        $user = 'root';
        $pass = 'psonu513@';
        $db = 'aryamarga';

    
       global $connection;
       $connection = mysqli_connect($host,$user, $pass, $db);
      if(!$connection){
          die("Erro in mysqli !");
      }

      try{
          $db = new PDO('mysql:dbhost=localhost;dbname=Company;charset=utf8','root','psonu513@');


      }
      catch(Exception $e){

          die('PDO error');
      }

      /*DATABASE CONNECTION */



?>