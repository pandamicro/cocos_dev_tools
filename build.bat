rem please add chrome.exe to PATH
chrome.exe --pack-extension=%cd%/bin/ --pack-extension-key=%cd%/cert/CocosDevTools.pem
move bin.crx %cd%/bin/CocosDevTools.crx