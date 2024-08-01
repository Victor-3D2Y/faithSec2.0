// .error {
//     color: red;
//     display: none;
// } //tem em todos

//nome da empresa no orçamento 
{/* <form id="myForm">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
        <span id="error-message" class="error">O nome é obrigatório.</span>
        <br><br>
        <button type="submit">Enviar</button>
    </form> */}


// Função de validação com parâmetros
function validateField(formId, inputId, errorMessageId) {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);
    const errorMessage = document.getElementById(errorMessageId);

    form.addEventListener('submit', function(event) {
        if (input.value.trim() === '') {
            // Previne o envio do formulário se o campo estiver vazio
            event.preventDefault();
            errorMessage.style.display = 'inline';
        } else {
            // Oculta a mensagem de erro e permite o envio do formulário
            errorMessage.style.display = 'none';
        }
    });
}

// Chama a função de validação passando os IDs dos elementos
validateField('myForm', 'name', 'error-message');


//quantidade de tablet
{/* <label for="number">Qnt de tablet:</label>
        <input type="number" id="number" name="number" required>
        <span id="error-message" class="error">O valor informado foi anteriormente informado:</span>
        <br><br>
        <button type="submit">Enviar</button> */}

// Função de validação com parâmetros
function validateNumberField(formId, inputId, errorMessageId, minValue) {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);
    const errorMessage = document.getElementById(errorMessageId);

    form.addEventListener('submit', function(event) {
        const value = parseFloat(input.value.trim());
        
        if (isNaN(value) || value <= minValue) {
            // Previne o envio do formulário se o valor não for numérico ou não for maior que o valor mínimo
            event.preventDefault();
            errorMessage.style.display = 'inline';
        } else {
            // Oculta a mensagem de erro e permite o envio do formulário
            errorMessage.style.display = 'none';
        }
    });
}

// Chama a função de validação passando os IDs dos elementos e o valor mínimo
validateNumberField('myForm', 'number', 'error-message', 2);

//quantidade de leito
{/* <form id="leitosForm">
        <label for="leitos">Quantidade de Leitos (diferente de 100):</label>
        <input type="number" id="leitos" name="leitos" required>
        <span id="error-message" class="error">Número informado anteriormente. A quantidade deve ser diferente de 100.</span>
        <br><br>
        <button type="submit">Enviar</button>
    </form> */}

    // Função de validação com parâmetros
function validateLeitosField(formId, inputId, errorMessageId, invalidValue) {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);
    const errorMessage = document.getElementById(errorMessageId);

    form.addEventListener('submit', function(event) {
        const value = parseFloat(input.value.trim());
        
        if (isNaN(value) || value <= invalidValue) {
            // Previne o envio do formulário se o valor for igual ou menor que o valor inválido
            event.preventDefault();
            errorMessage.style.display = 'inline';
        } else {
            // Oculta a mensagem de erro e permite o envio do formulário
            errorMessage.style.display = 'none';
        }
    });
}

// Chama a função de validação passando os IDs dos elementos e o valor inválido (100)
validateLeitosField('leitosForm', 'leitos', 'error-message', 100);


