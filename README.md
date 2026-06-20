# QA E-commerce Automation

![Cypress Tests](https://github.com/[ndamasc]/qa-ecommerce/actions/workflows/cypress.yml/badge.svg)

Automação E2E desenvolvida com Cypress e TypeScript para validação dos principais fluxos de negócio do SauceDemo.

## Stack

- Cypress
- TypeScript
- Faker.js
- Mochawesome
- GitHub Actions

## O que este projeto cobre

### Authentication

- Login com usuário válido
- Usuário bloqueado
- Credenciais inválidas
- Campos obrigatórios

### Inventory

- Listagem de produtos
- Adição ao carrinho
- Remoção de produtos
- Ordenação por preço

### Cart

- Persistência dos itens adicionados
- Remoção individual
- Remoção total do carrinho

### Checkout

- Fluxo completo de compra
- Validação de formulário
- Massa de dados dinâmica com Faker

## Arquitetura

O projeto foi estruturado utilizando Page Object Model (POM) para desacoplamento da camada de UI e maior manutenibilidade.

```text
cypress
├── e2e
├── fixtures
├── pages
└── support

shared
└── utils