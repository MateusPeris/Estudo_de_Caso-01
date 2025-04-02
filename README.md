# 📚 DevTech Academy - Sistema de Gerenciamento de Alunos

Este projeto é um estudo de caso desenvolvido para a disciplina de Tecnologia e Construção de Software. Ele simula um sistema de cadastro e gerenciamento de alunos para uma escola de programação fictícia chamada **DevTech Academy**.

---

## 🎯 Objetivo

Desenvolver um sistema em HTML, CSS e JavaScript com funcionalidades de CRUD, relatórios e boas práticas de programação, aplicando conceitos de DOM, orientação a objetos, programação funcional, eventos e versionamento com Git + Docker.

---

## 📌 Funcionalidades

### 🔹 Exercício 1: CRUD de Alunos
- Formulário com campos: Nome, Idade, Curso, Nota Final
- Lista de alunos exibida em tabela
- Botões de **Editar** e **Excluir**
- Armazenamento em memória (array de objetos)

### 🔹 Exercício 2: Classe `Aluno`
- Criação da classe com atributos e métodos
- Método `isAprovado()` para verificar aprovação
- Método `toString()` para retornar os dados formatados

### 🔹 Exercício 3: Eventos e Funções
- Uso de `addEventListener`, funções anônimas e arrow functions
- Exibição de mensagens ao salvar, editar e excluir

### 🔹 Exercício 4: Relatórios Dinâmicos
- Listar aprovados (notaFinal >= 7)
- Média das notas
- Média das idades
- Nomes em ordem alfabética
- Contagem de alunos por curso

---

## 🐳 Docker

O projeto é preparado para rodar em um **container Docker** com servidor Nginx.

### ✅ Como usar:

```bash
# Build da imagem
docker build -t cadastro-alunos .

# Rodar o container
docker run -d -p 8081:80 --name devtech-site cadastro-alunos
```

Acesse no navegador: [http://localhost:8081](http://localhost:8081)

---

## 🌐 Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- Docker e Nginx
- Git e GitHub

---

## 🗂️ Estrutura do Projeto

```
/projeto/
├── index1.html         # Página principal com o formulário e tabela
├── script1.js          # Lógica JS com eventos, classes e relatórios
├── style.css           # Estilização simples e elegante
├── Dockerfile          # Arquivo Docker para Nginx
```

---

## 🧪 Como testar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cadastro-alunos.git
   cd cadastro-alunos
   ```

2. Construa e execute o container com Docker.
```bash
   docker build -t cadastro-alunos .
   docker run -p 8081:80 cadastro-alunos
   ```

4. Acesse via navegador: `http://localhost:8081`
   
