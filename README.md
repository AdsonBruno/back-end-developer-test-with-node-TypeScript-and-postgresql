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

## Rodando o projeto

```bash
#instale as dependências com:
> yarn install
```

```bash
#inicie o postgres com o docker usando:
> yarn postgres-start
```

```bash
#rodando as migrations para criar o banco de dados
> yarn prisma migrate dev --name init
```

```bash
#para iniciar o projeto na linha de comando:
> yarn start:dev
```

### Endpoints:

Endpoint base da aplicação `http://localhost:8000/`

#### `POST` -> `http://localhost:8000/clients`

```json
{
  "name": "Fulano",
  "email": "fulanodetal@site.com",
  "cpf": "123456789",
  "phone": "82999999999"
}
```

Response

```json
{
  "id": 1,
  "name": "Fulano",
  "email": "fulanodetal@site.com",
  "cpf": "123456789",
  "phone": "82999999999",
  "createdAt": 2023-03-29T00:41:48.962Z
}
```

Obter a lista de todos os clientes cadastrados

#### `GET` -> `http://localhost:8000/clients`

```json
{
  {
    "id": 1,
    "name": "Fulano",
    "email": "fulanodetal@site.com",
    "cpf": "123456789",
    "phone": "82999999999",
    "createdAt": 2023-03-29T00:41:48.962Z
  },
  {
    "id": 2,
    "name": "Beltrano",
    "email": "beltrano@site.com",
    "cpf": "987456321",
    "phone": "82999999999",
    "createdAt": 2023-03-29T00:44:48.962Z
  }
}
```
