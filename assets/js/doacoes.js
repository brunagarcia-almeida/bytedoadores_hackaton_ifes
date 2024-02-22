(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    form.classList.add('was-validated')
                } else {
                    inserir()
                    form.classList.remove('was-validated')
                    form.reset()
                }
                event.preventDefault()
                event.stopPropagation()
            }, false)
        })
})()


function getLocalStorage() {
    return JSON.parse(localStorage.getItem('bd_doacoes')) ?? [];
}

function setLocalStorage(bd_doacoes) {
    localStorage.setItem('bd_doacoes', JSON.stringify(bd_doacoes));
}

function limparTabela() {
    var elemento = document.querySelector("#tabela>tbody");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}
//------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    populateCheckboxOptions();
    populateRadioOptions();
});
function populateRadioOptions() {
    var receptores = JSON.parse(localStorage.getItem('bd_receptores'));
    const radioOptionsDiv = document.getElementById('radioOptions');
    for (var i = 0, len = receptores.length; i < len; i++) {
        obj = receptores[i]
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.id = 'radio' + i;
        radio.value = obj.instituicao;
        radio.name = 'radios';
        const label = document.createElement('label');
        label.htmlFor = radio.id;
        label.appendChild(document.createTextNode(radio.value));
        radioOptionsDiv.appendChild(radio);
        radioOptionsDiv.appendChild(label);
        radioOptionsDiv.appendChild(document.createElement('br'));
    }
}
function populateCheckboxOptions() {
    var alimentos = JSON.parse(localStorage.getItem('bd_alimentos'));
    const checkboxOptionsDiv = document.getElementById('checkboxOptions');
    // ACCESS DATA
    for (var i = 0, len = alimentos.length; i < len; i++) {
        obj = alimentos[i]
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox' + i;
        checkbox.value = obj.nalimento;
        checkbox.name = 'checkboxes';
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        var nome;
        switch (checkbox.value) {
            case "milho": {
                nome = "Milho";
                break;
            }
            case "macarrao": {
                nome = "Macarrão";
                break;
            }
            case "feijao": {
                nome = "Feijão";
                break;
            }
            case "soja": {
                nome = "Soja";
                break;
            }
            case "arroz": {
                nome = "Arroz";
                break;
            }
            case "cafe": {
                nome = "Café";
                break;
            }
            case "fuba": {
                nome = "Fubá";
                break;
            }
            case "acucar": {
                nome = "Açúcar";
                break;
            }
            case "polvilho": {
                nome = "Polvilho";
                break;
            }
            case "farinhaTrigo": {
                nome = "Farinha de Trigo";
                break;
            }
            case "cevada": {
                nome = "Cevada";
                break;
            }
            case "fareloTrigo": {
                nome = "Farelo de Trigo";
                break;
            }
            case "leitePo": {
                nome = "Leite em Pó";
                break;
            }
            case "oleo": {
                nome = "Óleo";
                break;
            }
            case "biscoito": {
                nome = "Biscoito";
                break;
            }
            case "pipoca": {
                nome = "Pipoca";
                break;
            }
            case "achocolatado": {
                nome = "Achocolatado";
                break;
            }
            case "gelatina": {
                nome = "Gelatina em Pó";
                break;
            }
        }
        label.appendChild(document.createTextNode(nome));
        checkboxOptionsDiv.appendChild(checkbox);
        checkboxOptionsDiv.appendChild(label);
        checkboxOptionsDiv.appendChild(document.createElement('br'));
    }
}
//------------------------------------------------------------------------------
function atualizarTabela() {
    limparTabela();
    const bd_doacoes = getLocalStorage();
    let index = 0;
    for (cliente of bd_doacoes) {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
          <th scope="row">${index}</th>
          <td>${cliente.instituicao}</td>
          <td>${cliente.nemail}</td>
          <td>${cliente.telefone}</td>
          <td>${cliente.endereco}</td>
          <td>${cliente.receptor}</td>
          <td>${cliente.alimento}</td>
          <td>${cliente.validade}</td>
          <td>${cliente.quantidade}</td>
          <td>
              <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
          </td>
      `
        document.querySelector('#tabela>tbody').appendChild(novaLinha)
        index++;
    }
}

function inserir() {
    const selectedRadio = document.querySelectorAll('input[name="radios"]:checked');
    const savedRadio = Array.from(selectedRadio).map(cb => cb.value);
    const selectedCheckboxes = document.querySelectorAll('input[name="checkboxes"]:checked');
    const selectedValues = Array.from(selectedCheckboxes).map(cb => cb.value);
    if (savedRadio === undefined || savedRadio.length == 0 || selectedValues === undefined || selectedValues.length == 0) {
        return alert("Selecione os alimentos e a instituição corretamente!");
    }
    const cliente = {
        instituicao: document.getElementById('name').value,
        nemail: document.getElementById('nemail').value,
        telefone: document.getElementById('tel').value,
        endereco: document.getElementById('endereco').value,
        receptor: savedRadio,
        alimento: selectedValues,
        validade: document.getElementById('validade').value,
        quantidade: document.getElementById('quantidade').value
    }
    const bd_doacoes = getLocalStorage();
    bd_doacoes.push(cliente);
    setLocalStorage(bd_doacoes);
    atualizarTabela();
}

function excluir(index) {
    const bd_doacoes = getLocalStorage();
    bd_doacoes.splice(index, 1);
    setLocalStorage(bd_doacoes);
    atualizarTabela();
}
atualizarTabela();