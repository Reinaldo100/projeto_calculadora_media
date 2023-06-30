const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./imagens/emoji-feliz.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./imagens/emoji-triste.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeatividade = document.getElementById('nome-atividade');
    const inputNotaatividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeatividade.value)) {
        alert(`A atividade ${inputNomeatividade.value} já foi inserida`);
    }else {
        atividades.push(inputNomeatividade.value);
        notas.push(parseFloat(inputNotaatividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeatividade.value}</td>`
    linha += `<td>${inputNotaatividade.value}</td>`
    linha += `<td>${inputNotaatividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'

    linhas += linha;
    }

    document.getElementById('nome-atividade').value = '';
    document.getElementById('nota-atividade').value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    return somaDasNotas / notas.length;
}