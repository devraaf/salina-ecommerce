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
    <main>
        <section class="status">
            <div class="box-infos">
                <h1>Reserva Confirmada!</h1>
                <p><strong><?php echo $nome; ?></strong>, sua reserva para o dia 
                    <strong><?php echo $data; ?></strong> às 
                    <strong><?php echo $hora; ?></strong> foi concluída com sucesso.
                </p>
                <p>Estamos preparando tudo para receber você!</p>
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