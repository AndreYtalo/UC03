# 🚀 Guia de Execução - UC03 Aula01

## ✅ Problemas Resolvidos

### 1. **Erro: Cannot find package 'express'**
- **Causa:** Dependências não instaladas
- **Solução:** Executado `npm install` em ambos os diretórios (back e front)

### 2. **Erro no arquivo `.env` do backend**
- **Problema:**
  - `DB_NAME` estava configurado como `5432` (que é a porta)
  - `DB_PORT` estava faltando
  - `API_URL_FRONT` estava apontando para `http://localhost:5432` (errado)
  
- **Correção:**
  ```env
  # ANTES (ERRADO)
  DB_NAME=5432
  API_URL_FRONT=http://localhost:5432
  DB_PORT=5432  # Faltava
  
  # DEPOIS (CORRETO)
  DB_NAME=aula08
  DB_PORT=5432
  API_URL_FRONT=http://localhost:5173
  ```

### 3. **Arquivo `.env` do frontend**
- **Problema:** Configurado incorretamente como `PORT` sem valor
- **Solução:** Configurado corretamente como `VITE_API_URL=http://localhost:3000`

---

## 📦 Dependências Instaladas

### Backend (`back/`)
```
✓ express v5.2.1
✓ cors v2.8.6
✓ dotenv v17.3.1
✓ pg v8.19.0
✓ nodemon v3.1.14 (dev)
```

### Frontend (`front/`)
```
✓ react v19.2.0
✓ react-dom v19.2.0
✓ axios v1.13.6
✓ vite v7.3.1
✓ eslint v9.39.1
✓ @vitejs/plugin-react v5.1.1
```

---

## 🏃 Como Executar

### **Opção 1: Terminal Separado**

**Terminal 1 - Backend:**
```powershell
cd c:\Users\a95972917\Desktop\UC03\Aula01\back
npm start
# Rodará em http://localhost:3000
```

**Terminal 2 - Frontend:**
```powershell
cd c:\Users\a95972917\Desktop\UC03\Aula01\front
npm run dev
# Rodará em http://localhost:5173
```

### **Opção 2: Com npm-run-all (simultaneamente)**

Na raiz do projeto:
```powershell
npm install -g npm-run-all

# Depois na raiz
npm run dev:all
```

---

## 🔧 Configurações Necessárias

### Backend - `.env`
```env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=BemVindo!
DB_NAME=aula08
DB_PORT=5432
API_URL_FRONT=http://localhost:5173
```

### Frontend - `.env`
```env
VITE_API_URL=http://localhost:3000
```

### Banco de Dados PostgreSQL
Certifique-se de ter:
- ✓ PostgreSQL instalado
- ✓ Usuário `postgres` criado
- ✓ Banco de dados `aula08` criado
- ✓ Tabela `alunos` com campos: `id`, `nome`, `curso`, `nota`

---

## 📝 SQL para Criar a Tabela (se necessário)

```sql
CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    curso VARCHAR(100) NOT NULL,
    nota DECIMAL(5, 2) NOT NULL
);
```

---

## 🌐 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/alunos` | Listar todos os alunos |
| GET | `/alunos/:id` | Buscar aluno por ID |
| GET | `/alunos/curso/:curso` | Buscar alunos por curso |
| POST | `/alunos` | Criar novo aluno |
| PUT | `/alunos/:id` | Atualizar aluno |
| DELETE | `/alunos/:id` | Deletar aluno |

---

## ✨ Status Atual

- ✅ Backend iniciado com sucesso
- ✅ Frontend iniciado com sucesso
- ✅ Dependências instaladas
- ✅ Variáveis de ambiente configuradas
- ✅ CSS customizado aplicado
- ✅ Todos os erros corrigidos

---

## 🐛 Troubleshooting

### Erro: "EADDRINUSE :::3000"
- A porta 3000 já está em uso
- Solução: Mudar `PORT` no `.env` ou matar o processo na porta

### Erro: "Cannot connect to database"
- Verificar se PostgreSQL está rodando
- Confirmar credenciais em `.env`
- Verificar se banco de dados existe

### Erro: "VITE_API_URL is not defined"
- Certifique-se que `.env` existe em `front/`
- Reinicie o servidor Vite

---

**Data:** 10/03/2026
**Status:** ✅ TUDO FUNCIONANDO
