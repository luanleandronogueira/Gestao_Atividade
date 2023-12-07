<?php 

    include_once 'controladores/conexao.php';

    $query = "SELECT id, title, color, start, end FROM eventos";

    $stmt = $conn->prepare($query);

    $stmt->execute();

    $eventos = [];

    while ($resultado = $stmt->fetch(PDO::FETCH_ASSOC)){

        extract($resultado);

        $eventos[] = [

            'id' => $id,
            'title' => $title,
            'color' => $color,
            'start' => $start,
            'end' => $end

        ];

    }

    echo json_encode($eventos);


?>