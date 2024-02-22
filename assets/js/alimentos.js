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
    return JSON.parse(localStorage.getItem('bd_alimentos')) ?? [];
}

function setLocalStorage(bd_alimentos) {
    localStorage.setItem('bd_alimentos', JSON.stringify(bd_alimentos));
}

function limparTabela() {
    var elemento = document.querySelector("#tabela>tbody");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function atualizarTabela() {
    limparTabela();
    const bd_alimentos = getLocalStorage();
    let index = 0;
    for (cliente of bd_alimentos) {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
          <th scope="row">${index}</th>
          <td>${cliente.nalimento}</td>
          <td>${cliente.info}</td>
          <td><img src=${cliente.imagem} alt="" style="width:200px; height:auto;"></td>
          <td>
              <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
          </td>
      `
        document.querySelector('#tabela>tbody').appendChild(novaLinha)
        index++;
    }
}

function inserir() {
    const cliente = {
        nalimento: document.getElementById('nalimento').value,
        info: document.getElementById('info').value,
        imagem: document.getElementById('imagem').value
    }
    const bd_alimentos = getLocalStorage();
    bd_alimentos.push(cliente);
    setLocalStorage(bd_alimentos);
    atualizarTabela();
}

function excluir(index) {
    const bd_alimentos = getLocalStorage();
    bd_alimentos.splice(index, 1);
    setLocalStorage(bd_alimentos);
    atualizarTabela();
}

function validaralimento() {
    const bd_alimentos = getLocalStorage();
    for (cliente of bd_alimentos) {
        if (alimento.value == cliente.nalimento) {
            alimento.setCustomValidity("Este alimento já está cadastrado!");
            feedbacknal.innerText = "Este alimento já está cadastrado!";
            return false;
        } else {
            alimento.setCustomValidity("");
            feedbacknal.innerText = "Informe o alimento corretamente.";
        }
    }
    return true;
}

atualizarTabela();
const alimento = document.getElementById("nalimento");
const feedbacknal = document.getElementById("feedbacknal");
alimento.addEventListener('input', validaralimento);