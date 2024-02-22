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
    return JSON.parse(localStorage.getItem('bd_receptores')) ?? [];
}

function setLocalStorage(bd_receptores) {
    localStorage.setItem('bd_receptores', JSON.stringify(bd_receptores));
}

function limparTabela() {
    var elemento = document.querySelector("#tabela>tbody");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function atualizarTabela() {
    limparTabela();
    const bd_receptores = getLocalStorage();
    let index = 0;
    for (cliente of bd_receptores) {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
          <th scope="row">${index}</th>
          <td>${cliente.instituicao}</td>
          <td>${cliente.nemail}</td>
          <td>${cliente.telefone}</td>
          <td>${cliente.endereco}</td>
          <td>${cliente.sobre}</td>
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
        instituicao: document.getElementById('name').value,
        nemail: document.getElementById('nemail').value,
        telefone: document.getElementById('tel').value,
        endereco: document.getElementById('endereco').value,
        sobre: document.getElementById('info').value,
        imagem: document.getElementById('imagem').value
    }
    const bd_receptores = getLocalStorage();
    bd_receptores.push(cliente);
    setLocalStorage(bd_receptores);
    atualizarTabela();
}

function excluir(index) {
    const bd_receptores = getLocalStorage();
    bd_receptores.splice(index, 1);
    setLocalStorage(bd_receptores);
    atualizarTabela();
}

function validaremail() {
    const bd_receptores = getLocalStorage();
    for (cliente of bd_receptores) {
        if (email.value == cliente.nemail) {
            email.setCustomValidity("Este email já está cadastrado!");
            feedbackemail.innerText = "Este email já está cadastrado!";
            return false;
        } else {
            email.setCustomValidity("");
            feedbackemail.innerText = "Informe o email corretamente.";
        }
    }
    return true;
}

atualizarTabela();
const email = document.getElementById("nemail");
const feedbackemail = document.getElementById("feedbackemail");
email.addEventListener('input', validaremail);