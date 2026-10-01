@echo off
setlocal
cd /d "%~dp0"
title Giftora Website
color 0F

echo ==============================================
echo       GIFTORA - EASY WEBSITE LAUNCHER
echo ==============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed on this computer.
  echo.
  echo A browser will open to the Node.js download page.
  echo Install the LTS version, then double-click this file again.
  start "" "https://nodejs.org/"
  echo.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo First-time setup: installing website files...
  echo This happens only once and may take a few minutes.
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo Installation did not finish successfully.
    echo Check your internet connection and double-click OPEN_WEBSITE.bat again.
    pause
    exit /b 1
  )
)

echo.
echo Starting Giftora...
echo Your browser will open automatically in a few seconds.
echo Keep this black window OPEN while you use the website.
echo To stop the website, close this window or press Ctrl+C.
echo.

start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 5; Start-Process 'http://localhost:3000'"
call npm run dev

endlocal
