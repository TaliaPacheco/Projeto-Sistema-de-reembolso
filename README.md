# Refund - Projeto de Estudos

Pequeno projeto React + Vite criado para estudos e prática. Sistema de gerenciamento de solicitações de reembolso com autenticação baseada em função (Employee vs Manager).

## Stack
- React + TypeScript
- Vite
- TailwindCSS
- React Router

## Como rodar

1. Instale dependências:
   ```bash
   npm install
   ```

2. Rode em desenvolvimento:
   ```bash
   npm run dev
   ```

3. Build para produção:
   ```bash
   npm run build
   ```

## Estrutura do projeto
```
src/
├── components/      # Componentes reutilizáveis
├── pages/          # Páginas do app
├── routes/         # Definição de rotas
├── contexts/       # Contextos React (autenticação)
├── assets/         # Imagens e ícones
├── utils/          # Utilitários
└── App.tsx         # Componente raiz
```

## Funcionalidades

### Autenticação
- Login com detecção automática de função baseada no email
- Cadastro de novo usuário
- Logout funcional
- Context API para gerenciar estado da autenticação

### Roteamento Baseado em Função

#### **Employee (Funcionário)**
- Página inicial: Criar solicitação de reembolso
- Preencher dados da despesa (nome, categoria, valor, anexo)
- Confirmar e enviar solicitação
- Rota: `/`

#### **Manager (Gerente)**
- Página inicial: Dashboard com lista de solicitações
- Pesquisar solicitações por nome
- Paginação de resultados
- Visualizar detalhes de cada solicitação
- Rotas: `/`, `/refund/:id`

## Como testar

### Login como Employee
- Email: `cualquier@employee.com` (deve conter "employee")
- Será redirecionado para a página de criar reembolso

### Login como Manager
- Email: `gerente@company.com` (não contém "employee")
- Será redirecionado para o dashboard de solicitações

### Cadastro
- Crie uma nova conta
- Será automaticamente classificado como Employee

## Nota
- Este é um projeto de aprendizado sem backend real
- Os dados são armazenados apenas em memória
- A autenticação é simulada baseada no email

## Contribuição
- Pull requests são bem-vindos.
