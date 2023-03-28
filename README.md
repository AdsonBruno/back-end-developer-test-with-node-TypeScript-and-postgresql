# Cadastro de clientes utilizando postgres

## Descrição

Este projeto tem como objetivo o teste para a vaga de desenvolvedor back-end com nodeJs. O teste consiste em criar uma API com node, utilizando um banco de dados relacionais, para inserir clientes. Além disso, deve ser possível buscar clientes inseridos através de um range, Ex.: 03/2022 até 01/2023.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- PostgresSql

## Conceitos aplicados

- Injeção de dependência
- Repository Pattern

## Entidades

<pre>
  forms_answers {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  created_at: date;
}
</pre>
