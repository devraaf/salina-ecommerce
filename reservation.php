<?php
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $data = date('d/m/Y', strtotime($_POST['data']));
    $hora = $_POST["hora"];
    $num_pessoas = $_POST["num_pessoas"];
    $obs = $_POST["obs"];
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
    <link rel="stylesheet" href="src/styles/layout.css">
    <link rel="stylesheet" href="src/styles/reservation.css">
    <link rel="shortcut icon" href="src/images/logos/favicon.svg" type="image/x-icon">
    <title>Salina | Reserva</title>
</head>
<body>
    <main class="mask">
        <section class="status">
            <span class="flag">Você economizou 30% reservando online!</span>
            <div class="status-container">
                <div class="top-status">
                    <i class="fa-solid fa-circle-check"></i>
                    <h1><img src="src/images/titulos/reserva-confirmada.svg" alt="reserva confirmada"></h1>
                    <p>Sua mesa está garantida</p>
                </div>
                <div class="box box-infos">
                    <div class="info">
                        <div class="campo">
                            <i class="fa-solid fa-user"></i>
                            <p>Nome</p>
                        </div>
                        <p><strong><?php echo $nome; ?></strong></p>
                    </div>
                    <div class="info">
                        <div class="campo">
                            <i class="fa-solid fa-calendar-days"></i>
                            <p>Data</p>
                        </div>
                        <p><strong><?php echo $data; ?></strong></p>
                    </div>
                    <div class="info">
                        <div class="campo">
                            <i class="fa-solid fa-clock"></i>
                            <p>Hora</p>
                        </div>
                        <p><strong><?php echo $hora; ?></strong></p>
                    </div>
                    <div class="info">
                        <div class="campo">
                            <i class="fa-solid fa-user-group"></i>
                            <p>Pessoas</p>
                        </div>
                        <p><strong><?php echo $num_pessoas; ?></strong></p>
                    </div>
                    <div class="info">
                        <div class="campo">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>Local</p>
                        </div>
                        <p><strong>Estrada das Ostras, 90</strong></p>
                    </div>
                </div>
                <div class="box box-rebate">
                    <p>Você ganhou <strong>30% de desconto</strong> em toda a conta por reservar com antecedência pelo nosso site.</p>
                    <p>Apresente este código ao chegar:</p>
                    <span>SALINA30-0001</span>
                </div>
                
                <div class="final-area">
                    <h3>Estamos preparando tudo para receber você!</h3>
                    <p>Você receberá um lembrete 2 horas antes da sua reserva.</p>
                    <div class="btn-area">
                        <a href="menu.html" class="menu">Ver cardápio</a>
                        <a href="index.html" class="index">Voltar ao início</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="footer-content">
            <div class="footer-logo">
                <img src="src/images/logos/logo-footer.svg" alt="logotipo">
            </div>
            <div class="footer-contact">
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <span>(11) 92345-6789</span>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <span>Estrada das Ostras, 90</span>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <span>contato@salina.com.br</span>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <hr>
            <p>© 2026 Restaurante Salina | Desenvolvido por: Maria Eduarda Aurélio e Rafaela Campos</p>
        </div>
    </footer>
</body>
</html>