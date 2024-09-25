const form = document.getElementById('form-numero');
let linhas = '';
const totalContatosTd = document.querySelector('tfoot tr td');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const inputNomeContato = document.getElementById('nome-contato');
  const inputNumeroContato = document.getElementById('numero-contato');

  if (inputNumeroContato.value.length < 11) {
    inputNumeroContato.setCustomValidity('O número de contato deve ter no mínimo 11 dígitos');
  } else {
    inputNumeroContato.setCustomValidity(''); // remove a mensagem de erro

    const numeroFormatado = formatarNumero(inputNumeroContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</td>`;
    linha += `<td>${numeroFormatado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

    const totalContatos = corpoTabela.rows.length;
    totalContatosTd.textContent = `Total de contatos: ${totalContatos}`;
  }
});

function formatarNumero(numero) {
    const partes = numero.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (partes) {
      return `(${partes[1]}) ${partes[2]}-${partes[3]}`;
    } else {
      return numero;
    }
  }