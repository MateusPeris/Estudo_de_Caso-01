class Aluno {
  constructor(nome, idade, curso, notaFinal) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.notaFinal = parseFloat(notaFinal);
  }

  isAprovado() {
    return this.notaFinal >= 7;
  }

  toString() {
    return `${this.nome} - ${this.curso} - Nota: ${this.notaFinal}`;
  }
}

let alunos = [];
let editIndex = -1;

const form = document.getElementById('formAluno');
const tabela = document.getElementById('tabelaAlunos');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const curso = document.getElementById('curso').value;
  const nota = document.getElementById('nota').value;

  const aluno = new Aluno(nome, idade, curso, nota);

  if (editIndex === -1) {
    alunos.push(aluno);
  } else {
    alunos[editIndex] = aluno;
    editIndex = -1;
  }

  form.reset();
  renderizarTabela();
});

function renderizarTabela() {
  tabela.innerHTML = '';
  alunos.forEach((aluno, index) => {
    const linha = document.createElement('tr');

    linha.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.idade}</td>
      <td>${aluno.curso}</td>
      <td>${aluno.notaFinal}</td>
      <td>${aluno.isAprovado() ? 'Aprovado' : 'Reprovado'}</td>
      <td>
        <button onclick="editarAluno(${index})">Editar</button>
        <button onclick="excluirAluno(${index})">Excluir</button>
      </td>
    `;

    tabela.appendChild(linha);
  });
}

function editarAluno(index) {
  const aluno = alunos[index];
  document.getElementById('nome').value = aluno.nome;
  document.getElementById('idade').value = aluno.idade;
  document.getElementById('curso').value = aluno.curso;
  document.getElementById('nota').value = aluno.notaFinal;
  editIndex = index;
}

function excluirAluno(index) {
  alunos.splice(index, 1);
  renderizarTabela();
}