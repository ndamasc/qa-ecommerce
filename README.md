# 🛒 E-commerce QA Suite (Playwright + TypeScript)

Este projeto demonstra uma estratégia de teste de software para um e-commerce, cobrindo camadas de **UI (E2E)**, **API** e **Integração**. O objetivo é demonstrar competências de um **QA Pleno** em automação moderna.

## 🛠️ Tecnologias Utilizadas
- **Linguagem:** TypeScript
- **Framework de Testes:** Playwright
- **Dados Dinâmicos:** Faker.js
- **CI/CD:** GitHub Actions
- **Relatórios:** Playwright HTML Report

## 🏗️ Arquitetura do Projeto
O projeto utiliza o padrão **Page Object Model (POM)** para garantir manutenibilidade e separação de responsabilidades.
- `pages/`: Mapeamento de elementos e ações das telas.
- `tests/e2e/`: Fluxos de usuário completos.
- `tests/api/`: Validação de contratos e respostas do backend.
- `tests/integration/`: Garantia de consistência entre os dados do backend (API) e o que é exibido no frontend.

## 🚀 Como Rodar os Testes

1. Instale as dependências:
   ```bash
   npm install

   npx playwright install

   npx playwright test