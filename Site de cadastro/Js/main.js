$(document).ready(function() {
$('#telefone').mask('(00) 00000-0000')
$('#cep').mask('00000-000')
$('#cpf').mask('000.000.000-00')

// Validação

$('form').validate({
    rules: {
        nome: {required: true},
        email: {required: true, email: true},
        telefone: {required: true},
        cpf: {required: true},
        endereco: {required: true},
        cep: {required: true}
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposInc = validador.numberOfInvalids()
        if(camposInc) {
            alert(`Existem ${camposInc} campos incorretos`)
        }
    }
    
    })
})

