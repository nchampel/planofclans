<?php

namespace App\Calls;

use App\Models\ProfileModel;
use App\Models\TokenModel;
use \Firebase\JWT\JWT;

include('../../inc/config.php');
require '../../vendor/autoload.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Authorization, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");

// $test = file_get_contents("http://");
// echo $test;
// $Data = json_decode($request->body(), true);
// $energy = filter_var($Data['energy'], FILTER_SANITIZE_STRING);
try {
    $profileModel = new ProfileModel();
    $user = $profileModel::checkPassword($_POST['pseudo'], $_POST['password']);

    if ($user) {
        $payload = array(
            "sub" => "1234567890", // Sujet
            "iss" => "your-website.com", // Émetteur
            "exp" => time() + 3600, // Date d'expiration (1 heure à partir de maintenant)
            "permissions" => ["read", "write"] // Autres revendications pertinentes
        );

        $token = JWT::encode($payload, $key, 'HS256');
        echo $token;
        die();
        $tokenModel = new TokenModel();
        $tokenModel::saveToken($user['id'], $token);
    }

    if ($user['status']) {
        $Response['status'] = 200;
        $Response['data'] = $user['data'];
        $Response['message'] = 'Connecté';
        echo (json_encode($Response));
        // $response->code(200)->json($Response);

        // return /*$Response*/;
    } else {
        $Response['status'] = 400;
        $Response['data'] = [];
        $Response['message'] = 'Une erreur inattendue s\'est produite. Veuillez réessayer.';

        // $response->code(400)->json($Response);
        echo (json_encode($Response));
        // return;
    }
} catch (\Exception $e) {
    $Response['status'] = 500;
    $Response['message'] = $e->getMessage();
    $Response['data'] = [];

    // $response->code(500)->json($Response);
    echo (json_encode($Response));
    // return;
}
