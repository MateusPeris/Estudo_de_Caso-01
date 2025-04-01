class Aluno {
  constructor(nome, idade, curso, notaFinal) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.notaFinal = parseFloat(notaFinal);
  }

  isAprovado = () => this.notaFinal >= 7;

  toString = () => `${this.nome} - ${this.curso} - Nota: ${this.notaFinal}`;
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
    alert("Aluno cadastrado com sucesso!");
    console.log("Cadastrado:", aluno.toString());
  } else {
    alunos[editIndex] = aluno;
    alert("Aluno editado com sucesso!");
    console.log("Editado:", aluno.toString());
    editIndex = -1;
  }

  form.reset();
  renderizarTabela();
});

const renderizarTabela = () => {
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
        <button class="editar" data-index="${index}">Editar</button>
        <button class="excluir" data-index="${index}">Excluir</button>
      </td>
    `;

    tabela.appendChild(linha);
  });

  document.querySelectorAll('.editar').forEach(btn => {
    btn.addEventListener('click', function () {
      const index = this.getAttribute('data-index');
      editarAluno(index);
    });
  });

  document.querySelectorAll('.excluir').forEach(btn => {
    btn.addEventListener('click', function () {
      const index = this.getAttribute('data-index');
      excluirAluno(index);
    });
  });
};

const editarAluno = (index) => {
  const aluno = alunos[index];
  document.getElementById('nome').value = aluno.nome;
  document.getElementById('idade').value = aluno.idade;
  document.getElementById('curso').value = aluno.curso;
  document.getElementById('nota').value = aluno.notaFinal;
  editIndex = index;
};

const excluirAluno = (index) => {
  const alunoRemovido = alunos[index];
  alunos = alunos.filter((_, i) => i != index);
  alert("Aluno excluído com sucesso!");
  console.log("Excluído:", alunoRemovido.toString());
  renderizarTabela();
};