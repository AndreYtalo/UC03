@echo off
REM Script para iniciar Backend e Frontend simultaneamente

echo ========================================
echo Iniciando aplicacao UC03 Aula01
echo ========================================
echo.

REM Backend
echo [1/2] Iniciando Backend (porta 3000)...
start "Backend" cmd /k "cd back && npm start"

timeout /t 2

REM Frontend
echo [2/2] Iniciando Frontend (porta 5173)...
start "Frontend" cmd /k "cd front && npm run dev"

echo.
echo ========================================
echo Aplicacao iniciada!
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:5173
echo ========================================

pause
