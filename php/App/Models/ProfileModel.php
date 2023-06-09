<?php

namespace App\Models;

// include_once('MySQL.php');
require '../../vendor/autoload.php';

use App\Models\MySQL;

class ProfileModel extends MySQL
{
    public static function checkPassword($pseudo, $password)
    {
        $rqt = "SELECT * FROM profiles WHERE pseudo = :pseudo";
        //$rqt = "insert into player (pseudo, town_food) values (:pseudo, '100')";
        //On prépare notre requête. ça nous renvoie un objet qui est notre requête préparée prête à être executée
        try {
            $statement = Parent::getInstance()->prepare($rqt);
            $statement->bindParam(':pseudo', $pseudo);
            // $statement->bindParam(':level', $level);
            //On l'execute
            $statement->execute();
            $user = $statement->fetch(\PDO::FETCH_ASSOC);
        } catch (\Exception $exception) {
            echo $exception->getMessage();
        }
        if ($user) {
            if (password_verify($password, $user['password'])) {
                $result = $user;
            } else {
                $result = false;
            }
        } else {
            $result = false;
        }
        // var_dump($result);
        // die();
        return [
            'status' => '200',
            'data' => $result
        ];
    }
}
