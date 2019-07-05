window.onload = function() {

/*****************************
    FUNÇÕES
******************************/ 

// Faz a validação para um campo email.
function validarEmail(email) {
    let padrao = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return padrao.test(String(email.value).toLowerCase());
};

// Faz a validação para um campo senha (Minimo de 6 caracteres sendo pelo menos 1 letra minuscula, 1 letra maiuscula e 1 númeral)
function validarSenha(senha){
    let padrao = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return padrao.test(senha.value);
}

// Faz a validação para um campo nome.
function validarNome(nome){
    let padrao = /^[A-zÀ-ú '´]+$/;
    return padrao.test(nome.value);
};

// Faz a validação para um campo data em (DD/MM/YYYY).
function validarData(data){
    let padrao = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    return padrao.test(data.value);
};

// Faz a validação para um campo altura em (cm).
function validarAltura(altura){
    let padrao = /^[0-9]{2,3}$/;
    return padrao.test(altura.value);
};

// Faz uma validação para um campo peso em (kg).
function validarPeso(peso){
    let padrao = peso.value * 1;
    if(padrao > 0 && typeof(padrao) === 'number') { return true };
};

// Faz uma validação para o campo <select> "Tipo de Refeição".
function validarSelect(id){
    // '#id :selected'
    return $(id).val() !== '';
};

// Faz uma validação para um campo descrição.
function validarTextarea(id){
    return $(id).val() !== '';
};

// Faz uma validação para um campo de pressão arterial
function validarPressao(valor){
    let n = valor.value * 1
    let e = Number.isInteger(n)
    if(e){
        if(n > 1 && n < 250) {
            return true
        } else { return false }
    }
}

// Faz a validação para um campo calorias em (kcal).
function validarCalorias(calorias){
    let padrao = /^[0-9]{1,5}$/;
    return padrao.test(calorias.value);
};

// Permite visualizar caracteres do campo de senha, e se usado novamente protege campo novamente.
function mostrarSenha(input) {
    if(input.type === 'text') {
        input.setAttribute('type','password');
    } else {
        input.setAttribute('type','text');
    }
};

/*****************************
    VALIDAÇÃO
******************************/ 

// Rotina de validação de login e senha
$('#btn_logar').click(function(){
    if(validarEmail(input_logar_email)) {
        if(validarSenha(input_logar_senha)){
            form_logar.removeAttribute('onsubmit');
        } else {
            $('#span_warning_msg').html('');
            $('#span_warning_msg').html('Senha não corresponde ao email cadastrado');
            $('#modal_warning').modal('toggle');
        }
    } else {
        $('#span_warning_msg').html('');
        $('#span_warning_msg').html('Informe o e-mail cadastrado no Health Track');
        $('#modal_warning').modal('toggle');
    }
});


// Rotina de validação de esqueci minha senha
$('#btn_esqueci_senha').click(function(){
    if(validarEmail(input_email_esqueci_senha)){
        $('#span_success_msg').html('');
        $('#span_success_msg').html('Uma nova senha foi enviada para seu email');
        $('#modal_success').modal('toggle');
        $('#form_esqueci_senha').trigger("reset");
    } else {
        $('#span_warning_msg').html('');
        $('#span_warning_msg').html('Informe o e-mail cadastrado no Health Track');
        $('#modal_warning').modal('toggle');   
    }
});


// >> Rotina de validação criar novo usuário
// Nome Completo
$('#btn_criar_novo_usuario').click(function(){
    // Variavel de validação
    let check = true;

    // Validar Nome
    if(validarNome(input_nome_novo_usuario) !== true){ 
        check = false;
        $('#span_ajuda_nome_novo_usuario').show();
        $('#input_nome_novo_usuario').addClass('warning');
    } else { 
        $('#span_ajuda_nome_novo_usuario').hide();
        $('#input_nome_novo_usuario').removeClass('warning');
    }
    
    // Validar Data de Naascimento
    if(validarData(input_nascimento_novo_usuario) !== true){ 
        check = false;
        $('#span_ajuda_nascimento_novo_usuario').show();
        $('#input_nascimento_novo_usuario').addClass('warning'); 
    } else { 
        $('#span_ajuda_nascimento_novo_usuario').hide();
        $('#input_nascimento_novo_usuario').removeClass('warning');
    }
    
    // Validar Altura
    if(validarAltura(input_altura_novo_usuario) !== true){ 
        check = false;
        $('#span_ajuda_altura_novo_usuario').show();
        $('#input_altura_novo_usuario').addClass('warning');
    } else {
        $('#span_ajuda_altura_novo_usuario').hide();
        $('#input_altura_novo_usuario').removeClass('warning');
    }
    
    // Validar Email
    if(validarEmail(input_email_novo_usuario) !== true){ 
        check = false;
        $('#span_ajuda_email_novo_usuario').show();
        $('#input_email_novo_usuario').addClass('warning');
    } else {
        $('#span_ajuda_email_novo_usuario').hide(); 
        $('#input_email_novo_usuario').removeClass('warning');
    }
    
    // Validar Email confirmar
    if(validarEmail(input_email_novo_usuario_confirmar) !== true){ 
        check = false;
        $('#input_email_novo_usuario_confirmar').addClass('warning');
    } else { 
        $('#input_email_novo_usuario_confirmar').removeClass('warning');
    }

    // Validar Senha
    if(validarSenha(input_senha_novo_usuario) !== true){ 
        check = false;
        $('#span_ajuda_senha_novo_usuario').show();
        $('#input_senha_novo_usuario').addClass('warning');
    } else {
        $('#span_ajuda_senha_novo_usuario').hide();
        $('#input_senha_novo_usuario').removeClass('warning');
    }

    // Validar Senha confirmar
    if(validarSenha(input_senha_novo_usuario_confirmar) !== true){ 
        check = false;
        $('#input_senha_novo_usuario_confirmar').addClass('warning');
    } else { 
        $('#input_senha_novo_usuario_confirmar').removeClass('warning');
    }

    // Validar confirmação de email
    if(input_email_novo_usuario.value === input_email_novo_usuario_confirmar.value) {
        $('#span_ajuda_confirmar_email_novo_usuario').hide();
    } else { 
        check = false;
        $('#span_ajuda_confirmar_email_novo_usuario').show();
        $('#input_email_novo_usuario').addClass('warning');
        $('#input_email_novo_usuario_confirmar').addClass('warning');
    };

    // Validar confirmação de senha 
    if(input_senha_novo_usuario.value === input_senha_novo_usuario_confirmar.value) {
        $('#span_ajuda_confirmar_senha_novo_usuario').hide();
    } else { 
        check = false;
        $('#span_ajuda_confirmar_senha_novo_usuario').show();
        $('#input_senha_novo_usuario').addClass('warning');
        $('#input_senha_novo_usuario_confirmar').addClass('warning');
    };

    // Se check for true então sera possível criar a conta.
    if(check === true) {
        $('#span_success_msg').html('');
        $('#span_success_msg').html('Sua conta foi criada com sucesso');
        $('#modal_success').modal('toggle');
        $('#btn_criar_novo_usuario').remove();
        $('#modal_body_novo_usuario').html('').addClass('text-dark').html('Uma confirmação foi enviada para seu email, verifique as instruções para continuar');
    } else {
        $('#span_warning_msg').html('');
        $('#span_warning_msg').html('Todos os campos em vermelho devem ser preenchidos corretamente para prosseguir');
        $('#modal_warning').modal('toggle');
    }
});


// >> Salvar novo registro de peso
$('#btn_salvar_peso').click(function(){
    // Variavel de validação
    let check = true;

    // Validar peso
    if(validarPeso(input_peso_registro_peso) !== true){
        check = false;
        $('#span_ajuda_peso_registro_peso').show();
        $('#input_peso_registro_peso').addClass('warning');
    } else {
        $('#span_ajuda_peso_registro_peso').hide();
        $('#input_peso_registro_peso').removeClass('warning');
    }

    // Validar data
    if(validarData(input_data_registro_peso) !== true){
        check = false;
        $('#span_ajuda_data_registro_peso').show();
        $('#input_data_registro_peso').addClass('warning');
    } else {
        $('#span_ajuda_data_registro_peso').hide();
        $('#input_data_registro_peso').removeClass('warning');
    }

    // Validação geral
    if(check === true) {
        $('#span_success_msg').html('');
        $('#span_success_msg').html('Registro de peso salvo com sucesso');
        $('#modal_success').modal('toggle');
        $('#form_registro_peso').trigger("reset");
    } else {
        $('#span_warning_msg').html('');
        $('#span_warning_msg').html('Todos os campos em vermelho devem ser preenchidos corretamente para prosseguir');
        $('#modal_warning').modal('toggle');
    }
});


// >> Salvar novo registro de alimento
$('#btn_salvar_alimento').click(function(){
    // Variavel de validação
    let check = true;

    // Validar peso
    if(validarSelect('#select_tipo_registro_alimento :selected') !== true){
        check = false;
        $('#span_ajuda_tipo_registro_alimento').show();
        $('#select_tipo_registro_alimento').addClass('warning');
    } else {
        $('#span_ajuda_tipo_registro_alimento').hide();
        $('#select_tipo_registro_alimento').removeClass('warning');
    }

    // Validar descrição
    if(validarTextarea('#textarea_descricao_registro_alimento') !== true){
        check = false;
        $('#span_ajuda_descricao_registro_alimento').show();
        $('#textarea_descricao_registro_alimento').addClass('warning');
    } else {
        $('#span_ajuda_descricao_registro_alimento').hide();
        $('#textarea_descricao_registro_alimento').removeClass('warning');
    }

    // Validar data
    if(validarData(input_data_registro_alimento) !== true){
        check = false;
        $('#span_ajuda_data_registro_alimento').show();
        $('#input_data_registro_alimento').addClass('warning');
    } else {
        $('#span_ajuda_data_registro_alimento').hide();
        $('#input_data_registro_alimento').removeClass('warning');
    }

    // Validar calorias
    if(validarCalorias(input_calorias_registro_alimento) !== true){
        check = false;
        $('#span_ajuda_calorias_registro_alimento').show();
        $('#input_calorias_registro_alimento').addClass('warning');
    } else {
        $('#span_ajuda_calorias_registro_alimento').hide();
        $('#input_calorias_registro_alimento').removeClass('warning');
    }
    
    // Validação geral
    if(check === true) {
        $('#span_success_msg').html('');
        $('#span_success_msg').html('Registro de refeição salvo com sucesso');
        $('#modal_success').modal('toggle');
        $('#form_registro_alimento').trigger("reset");
    } else {
        $('#span_warning_msg').html('');
        $('#span_warning_msg').html('Todos os campos em vermelho devem ser preenchidos corretamente para prosseguir');
        $('#modal_warning').modal('toggle');
    }
});


// >> Salvar novo registro de pressao
$('#btn_salvar_pressao').click(function(){
    // Variavel de validação
    let check = true;

    // Validar sistólica
    if(validarPressao(input_sistolica_registro_pressao) !== true){
        check = false;
        $('#span_ajuda_sistolica_registro_pressao').show();
        $('#input_sistolica_registro_pressao').addClass('warning');
    } else {
        $('#span_ajuda_tipo_registro_pressao').hide();
        $('#input_sistolica_registro_pressao').removeClass('warning');
    }

    // Validar diastólica
    if(validarPressao(input_diastolica_registro_pressao) !== true){
        check = false;
        $('#span_ajuda_diastolica_registro_pressao').show();
        $('#input_diastolica_registro_pressao').addClass('warning');
    } else {
        $('#span_ajuda_tipo_registro_pressao').hide();
        $('#input_diastolica_registro_pressao').removeClass('warning');
    }

    // Validar data
    if(validarData(input_data_registro_pressao) !== true){
        check = false;
        $('#span_ajuda_data_registro_pressao').show();
        $('#input_data_registro_pressao').addClass('warning');
    } else {
        $('#span_ajuda_data_registro_pressao').hide();
        $('#input_data_registro_pressao').removeClass('warning');
    }
    
    // Validação geral
    if(check === true) {
        $('#span_success_msg').html('');
        $('#span_success_msg').html('Registro de pressão salvo com sucesso');
        $('#modal_success').modal('toggle');
        $('#form_registro_pressao').trigger("reset");
    } else {
        $('#span_warning_msg').html('');
        $('#span_warning_msg').html('Todos os campos em vermelho devem ser preenchidos corretamente para prosseguir');
        $('#modal_warning').modal('toggle');
    }
});


// >> Salvar novo registro de atividade
$('#btn_salvar_atividade').click(function(){
    // Variavel de validação
    let check = true;

    // Validar tipo de atividade
    if(validarSelect('#select_tipo_registro_atividade :selected') !== true){
        check = false;
        $('#span_ajuda_tipo_registro_atividade').show();
        $('#select_tipo_registro_atividade').addClass('warning');
    } else {
        $('#span_ajuda_tipo_registro_atividade').hide();
        $('#select_tipo_registro_atividade').removeClass('warning');
    }

    // Validar descrição da atividade
    if(validarTextarea(textarea_descricao_registro_atividade) !== true){
        check = false;
        $('#span_ajuda_descricao_registro_atividade').show();
        $('#textarea_descricao_registro_atividade').addClass('warning');
    } else {
        $('#span_ajuda_descricao_registro_atividade').hide();
        $('#textarea_descricao_registro_atividade').removeClass('warning');
    }

    // Validar data da atividade
    if(validarData(input_data_registro_atividade) !== true){
        check = false;
        $('#span_ajuda_data_registro_atividade').show();
        $('#input_data_registro_atividade').addClass('warning');
    } else {
        $('#span_ajuda_data_registro_atividade').hide();
        $('#input_data_registro_atividade').removeClass('warning');
    }

    // Validar calorias
    if(validarCalorias(input_calorias_registro_atividade) !== true){
        check = false;
        $('#span_ajuda_calorias_registro_atividade').show();
        $('#input_calorias_registro_atividade').addClass('warning');
    } else {
        $('#span_ajuda_calorias_registro_atividade').hide();
        $('#input_calorias_registro_atividade').removeClass('warning');
    }

    // Validação geral
    if(check === true) {
        $('#span_success_msg').html('');
        $('#span_success_msg').html('Registro de atividade física salvo com sucesso');
        $('#modal_success').modal('toggle');
        $('#form_registro_atividade').trigger("reset");
    } else {
        $('#span_warning_msg').html('');
        $('#span_warning_msg').html('Todos os campos em vermelho devem ser preenchidos corretamente para prosseguir');
        $('#modal_warning').modal('toggle');
    }

});


// >> Salvar nova senha
$('#btn_salvar_nova_senha').click(function(){
    
    // Variavel de validação
    let check = true;

    // Validar senha antiga
    if(validarSenha(input_senha_antiga_perfil) !== true){
        check = false;
        $('#span_ajuda_senha_antiga_perfil').show();
        $('#input_senha_antiga_perfil').addClass('warning');
    } else {
        $('#span_ajuda_senha_antiga_perfil').hide();
        $('#input_senha_antiga_perfil').removeClass('warning');
    }
    
    // Validar senha nova
    if(validarSenha(input_senha_nova_perfil) !== true){
        check = false;
        $('#span_ajuda_senha_nova_perfil').show();
        $('#input_senha_nova_perfil').addClass('warning');
    } else {
        $('#span_ajuda_senha_nova_perfil').hide();
        $('#input_senha_nova_perfil').removeClass('warning');
    }

    // Verificar senhas confirmam
    if(input_senha_nova_perfil.value === input_senha_nova_confirmar_perfil.value){
        $('#span_ajuda_senha_nova_perfil_confirmar').hide();
        $('#input_senha_nova_perfil_confirmar').removeClass('warning');
    } else {
        check = false;
        $('#span_ajuda_senha_nova_confirmar_perfil').show();
        $('#input_senha_nova_perfil').addClass('warning');
        $('#input_senha_nova_perfil_confirmar').addClass('warning');
    }

    // Validação geral
    if(check === true) {
        $('#span_success_msg').html('');
        $('#span_success_msg').html('Alterações salvas com sucesso');
        $('#modal_success').modal('toggle');
        $('#form_perfil').trigger("reset");
    } else {
        $('#span_warning_msg').html('');
        $('#span_warning_msg').html('Os campos em vermelho devem ser preenchidos corretamente');
        $('#modal_warning').modal('toggle');
    }


});


// >> Mostar e Esconder senha perfil
$('#show_hide_senha_antiga_perfil').click(function(){
    mostrarSenha(input_senha_antiga_perfil);
});
$('#show_hide_senha_nova_perfil').click(function(){
    mostrarSenha(input_senha_nova_perfil);
});
$('#show_hide_senha_nova_confirmar_perfil').click(function(){
    mostrarSenha(input_senha_nova_confirmar_perfil);
});


// Fim do window.onload
} 