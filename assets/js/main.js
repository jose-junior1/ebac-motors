$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay:true,
    });
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })
    $('#campo-telefone').mask('(00) 00000-0000' , {
        placeholder: 'Ex: (00) 00000-0000'
    });
    $('form').validate({
        rules: {
            nome: {
                required: true
            }
            ,
            telefone: {
                required: true
            }
            ,
            email: {
                required: true, email:true
            },
            veiculoDeInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
                nome: 'Por favor, insira seu nome!',
                telefone: 'Por favor, insira seu número de tlefone!',
                email: 'Por favor, insira seu email!',
                mensagem: 'Por favor, insira a sua mensagem!'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeVeiculo)
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})