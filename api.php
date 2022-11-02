<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=utf-8');
    $_DATA = json_decode(file_get_contents("php://input"),true);

    class galeria{
        public $cod;
        public $cant;

        public function __construct(int $cod, int $cant){
            $this->cod = $cod;
            $this->cant = $cant;
        }
        public function codigos(){
            $cod = match($this->cod){
                1 => $cod = 200,
                2 => $cod = 100,
                3 => $cod = 80,
            };
            return $cod;
        }
        public function pagar():string{
            $cod = $this->codigos();
            $pagar = $cod * $this->cant;
            return $pagar;
        }
    }
    $lista = new galeria(cod:$_DATA['cod'], cant:$_DATA['cant']);
    echo($lista->pagar());
?>