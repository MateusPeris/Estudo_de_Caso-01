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

const divRelatorios = document.getElementById('relatorios');

// Aprovados
document.getElementById('btnAprovados').addEventListener('click', () => {
const aprovados = alunos.filter(a => a.isAprovado());
divRelatorios.innerHTML = `<strong>Aprovados:</strong><br>${aprovados.map(a => a.nome).join(', ') || 'Nenhum aluno'}`;
});

// Média das notas
document.getElementById('btnMediaNotas').addEventListener('click', () => {
if (alunos.length === 0) return divRelatorios.innerHTML = 'Nenhum aluno cadastrado.';
const media = alunos.reduce((acc, a) => acc + a.notaFinal, 0) / alunos.length;
divRelatorios.innerHTML = `<strong>Média das Notas:</strong> ${media.toFixed(2)}`;
});

// Média das idades
document.getElementById('btnMediaIdades').addEventListener('click', () => {
if (alunos.length === 0) return divRelatorios.innerHTML = 'Nenhum aluno cadastrado.';
const media = alunos.reduce((acc, a) => acc + parseInt(a.idade), 0) / alunos.length;
divRelatorios.innerHTML = `<strong>Média das Idades:</strong> ${media.toFixed(1)}`;
});

// Ordem alfabética
document.getElementById('btnOrdemAlfabetica').addEventListener('click', () => {
const nomes = alunos.map(a => a.nome).sort();
divRelatorios.innerHTML = `<strong>Alunos em Ordem Alfabética:</strong><br>${nomes.join(', ') || 'Nenhum aluno'}`;
});

// Quantidade por curso
document.getElementById('btnQtdPorCurso').addEventListener('click', () => {
const contagem = {};
alunos.forEach(a => {
contagem[a.curso] = (contagem[a.curso] || 0) + 1;
});

let resultado = '<strong>Quantidade de Alunos por Curso:</strong><ul>';
for (const curso in contagem) {
resultado += `<li>${curso}: ${contagem[curso]}</li>`;
}
resultado += '</ul>';

divRelatorios.innerHTML = resultado;
});