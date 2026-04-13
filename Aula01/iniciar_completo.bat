@echo off
REM Script para iniciar a aplicação completa

echo ========================================
echo 🚀 Iniciando Aplicação UC03 Aula01
echo ========================================
echo.

echo [1/2] Iniciando Backend (porta 3000)...
start "Backend" cmd /k "cd back && npm start"

timeout /t 3

echo [2/2] Iniciando Frontend (porta 5173/5174)...
start "Frontend" cmd /k "cd front && npm run dev"

echo.
echo ========================================
echo ✅ Aplicação iniciada com sucesso!
echo.
echo 🌐 URLs de acesso:
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:5173 (ou 5174 se ocupado)
echo.
echo 📝 Para testar:
echo - Abra o frontend no navegador
echo - Cadastre alguns alunos
echo - Teste editar e deletar
echo ========================================

pause