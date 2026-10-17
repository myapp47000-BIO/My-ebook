@echo off
setlocal
cd /d "%~dp0"

set PORT=5173

where python >nul 2>nul
if errorlevel 1 (
  echo [!] Python was not found in PATH.
  echo     Install Python 3 or serve this folder with any static web server.
  pause
  exit /b 1
)

echo ============================================================
echo  InfoLivres PWA - local server
echo  URL: http://localhost:%PORT%/
echo  Press Ctrl+C in this window to stop the server.
echo ============================================================
echo.

start "" "http://localhost:%PORT%/index.html"
python -m http.server %PORT%

endlocal
