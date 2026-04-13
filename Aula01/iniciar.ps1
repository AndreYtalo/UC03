# Script para iniciar Backend e Frontend simultaneamente em PowerShell

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Iniciando aplicacao UC03 Aula01" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Backend
Write-Host "[1/2] Iniciando Backend (porta 3000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit -Command `"cd back; npm start`""

Start-Sleep -Seconds 2

# Frontend
Write-Host "[2/2] Iniciando Frontend (porta 5173)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit -Command `"cd front; npm run dev`""

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Aplicacao iniciada!" -ForegroundColor Green
Write-Host "Backend:  http://localhost:3000" -ForegroundColor White
Write-Host "Frontend: http://localhost:5173" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan
