# UC03 Aula01 - Aplicação de Gerenciamento de Alunos

## ✅ STATUS: TOTALMENTE FUNCIONAL

**Última verificação:** 10/03/2026
**Backend:** ✅ Funcionando
**Frontend:** ✅ Funcionando
**Banco de dados:** ✅ Criado automaticamente
**Tabela alunos:** ✅ Criada automaticamente

## 🚀 Início Rápido

### **Opção 1: Script Automático (Recomendado)**
```cmd
# Na pasta c:\Users\a95972917\Desktop\UC03\Aula01
iniciar_completo.bat
```

### **Opção 2: Manual**
```powershell
# Terminal 1 - Backend
cd c:\Users\a95972917\Desktop\UC03\Aula01\back
npm start

# Terminal 2 - Frontend
cd c:\Users\a95972917\Desktop\UC03\Aula01\front
npm run dev
```

---

## 🌐 URLs de Acesso

- **Frontend:** http://localhost:5173 (ou 5174 se ocupado)
- **Backend:** http://localhost:3000

---

## 🗄️ Banco de Dados

**Status:** ✅ Criado automaticamente
- **Nome:** aula08
- **Tabela:** alunos (id, nome, curso, nota)
- **PostgreSQL:** ✅ Rodando

---

## ✨ Funcionalidades Testadas

✅ **Cadastrar aluno** - Funcionando
✅ **Listar alunos** - Funcionando
✅ **Editar aluno** - Funcionando
✅ **Deletar aluno** - Funcionando
✅ **Interface responsiva** - Funcionando
✅ **CSS customizado** - Aplicado

---

## 📋 Estrutura do Projeto

### **Windows PowerShell**
```powershell
# Na pasta c:\Users\a95972917\Desktop\UC03\Aula01
.\iniciar.ps1
```

### **Windows CMD**
```cmd
# Na pasta c:\Users\a95972917\Desktop\UC03\Aula01
iniciar.bat
```

### **Manual (PowerShell - 2 abas)**

**Aba 1 - Backend:**
```powershell
cd c:\Users\a95972917\Desktop\UC03\Aula01\back
npm start
```

**Aba 2 - Frontend:**
```powershell
cd c:\Users\a95972917\Desktop\UC03\Aula01\front
npm run dev
```

---

## 📋 Pré-requisitos

- ✅ Node.js instalado
- ✅ PostgreSQL instalado e rodando
- ✅ npm install executado em ambas as pastas (back e front)

---

## 🌐 URLs de Acesso

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3000

---

## 📁 Estrutura do Projeto

```
Aula01/
├── back/                    # Backend Express
│   ├── src/
│   │   ├── config/         # Configuração DB
│   │   ├── controllers/    # Controllers
│   │   ├── models/         # Models
│   │   └── routes/         # Rotas API
│   ├── app.js
│   ├── package.json
│   └── .env               # Variáveis de ambiente
│
├── front/                   # Frontend React + Vite
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/          # Páginas
│   │   ├── services/       # Chamadas API
│   │   └── assets/
│   ├── package.json
│   ├── vite.config.js
│   └── .env               # Variáveis de ambiente
│
├── iniciar.bat            # Script para iniciar (CMD)
├── iniciar.ps1            # Script para iniciar (PowerShell)
├── ANALISE_ERROS.md       # Relatório de correções
├── SETUP_EXECUCAO.md      # Guia de setup
└── README.md              # Este arquivo
```

---

## 🔧 Configuração do Banco de Dados

### PostgreSQL Setup
```sql
-- Conecte como admin e execute:
CREATE DATABASE aula08;

-- Depois conecte ao banco aula08 e crie a tabela:
CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    curso VARCHAR(100) NOT NULL,
    nota DECIMAL(5, 2) NOT NULL
);

-- Insira dados de teste (opcional):
INSERT INTO alunos (nome, curso, nota) VALUES
('João Silva', 'Engenharia', 8.5),
('Maria Santos', 'Medicina', 9.2),
('Pedro Oliveira', 'Direito', 7.8);
```

### Variáveis de Ambiente

**Back (.env):**
```env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=BemVindo!
DB_NAME=aula08
DB_PORT=5432
API_URL_FRONT=http://localhost:5173
```

**Front (.env):**
```env
VITE_API_URL=http://localhost:3000
```

---

## 📚 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| **GET** | `/alunos` | Listar todos os alunos |
| **GET** | `/alunos/:id` | Buscar aluno por ID |
| **GET** | `/alunos/curso/:curso` | Buscar alunos por curso |
| **POST** | `/alunos` | Criar novo aluno |
| **PUT** | `/alunos/:id` | Atualizar aluno |
| **DELETE** | `/alunos/:id` | Deletar aluno |

---

## ✨ Funcionalidades

✅ Listar alunos  
✅ Criar novo aluno  
✅ Editar aluno  
✅ Deletar aluno  
✅ Buscar por curso  
✅ Interface responsiva  
✅ CSS customizado moderno  

---

## 🛠️ Troubleshooting

### Porta 3000 em uso
```powershell
# Encontrar e matar processo na porta 3000
Get-NetTCPConnection -LocalPort 3000 | Select-Object -ExpandProperty OwningProcess | ForEach-Object { Stop-Process -Id $_ -Force }
```

### Erro de conexão com BD
- Verificar se PostgreSQL está rodando
- Confirmar credenciais em `.env`
- Verificar se banco `aula08` existe

### Erro VITE_API_URL
- Reiniciar servidor Vite
- Verificar arquivo `.env` em front/

### Módulos não encontrados
```powershell
# Reinstalar dependências
cd back
npm install

cd ../front
npm install
```

---

## 📝 Scripts Disponíveis

### Backend
```bash
npm start          # Inicia servidor (produção)
npm run dev        # Inicia com nodemon (desenvolvimento)
```

### Frontend
```bash
npm run dev        # Inicia Vite dev server
npm run build      # Build para produção
npm run lint       # Executa ESLint
npm run preview    # Preview da build
```

---

## ✅ Correções Realizadas

Veja `ANALISE_ERROS.md` para detalhes completos das correções de:
- ❌ Erros no FormAluno.jsx
- ❌ Erros no ListaAlunos.jsx
- ❌ Erro no AlunoPages.jsx
- ❌ Rota danosa em app.js
- ✅ CSS customizado criado

---

## 📞 Suporte

Para mais detalhes sobre os erros corrigidos, consulte:
- `ANALISE_ERROS.md` - Análise de todos os erros encontrados
- `SETUP_EXECUCAO.md` - Guia de execução e dependências

---

**Última atualização:** 10/03/2026
**Status:** ✅ FUNCIONANDO
