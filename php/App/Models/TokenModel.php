<?php

namespace App\Models;

require '../../vendor/autoload.php';

use App\Models\MySQL;

class TokenModel extends MySQL
{
    public static function saveToken($id, $token)
    {
        $rqt = "INSERT INTO token (profiles_id, token) VALUES (:id, :token)";
        //$rqt = "insert into player (pseudo, town_food) values (:pseudo, '100')";
        //On prépare notre requête. ça nous renvoie un objet qui est notre requête préparée prête à être executée
        try {
            $statement = Parent::getInstance()->prepare($rqt);
            $statement->bindParam(':id', $id);
            $statement->bindParam(':token', $token);
            //On l'execute
            $statement->execute();
            $result = $statement->fetch(\PDO::FETCH_ASSOC);
        } catch (\Exception $exception) {
            echo $exception->getMessage();
        }
        // var_dump($result);
        // die();
        return [
            'status' => '200',
            'data' => $result
        ];
    }
}
