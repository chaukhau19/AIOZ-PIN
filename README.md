# Playwright

#######################################################################################

### Part 1 - Installation Library   

```bash
########## 1. Check Versions ##########
node -v                           # Kiểm tra phiên bản Node.js đang cài
npm -v                            # Kiểm tra phiên bản npm
yarn -v                           # Kiểm tra phiên bản Yarn
yarn playwright --version         # Kiểm tra phiên bản Playwright đã cài qua Yarn
npm playwright --version          # Kiểm tra phiên bản Playwright nếu cài qua npm

########## 2. Uninstall All Dependencies ##########
# FOR LINUX / MAC / GIT BASH
rm -rf node_modules package-lock.json yarn.lock playwright-report test-results   # Xóa toàn bộ thư viện đã cài, file lock, report và test results

# FOR WINDOWS PowerShell (Run one at a time)
Remove-Item -Recurse -Force node_modules                     # Xóa thư mục node_modules
Remove-Item -Force package-lock.json, yarn.lock              # Xóa file lock của npm và Yarn
Remove-Item -Recurse -Force playwright-report, test-results  # Xóa report và kết quả test

########## 3. Remove Old Playwright & Dappwright ##########
yarn remove playwright @playwright/test @tenkeylabs/dappwright    # Gỡ bỏ các gói Playwright/Dappwright đã cài qua Yarn
npm uninstall playwright @playwright/test @tenkeylabs/dappwright  # Gỡ bỏ các gói Playwright/Dappwright đã cài qua npm

########## 4. Reinstall Core Tools ##########
yarn install                 # Cài lại dependencies trong package.json (chạy khi clone project hoặc xóa node_modules)
npm install -g yarn          # Cài Yarn toàn hệ thống (chỉ cần chạy 1 lần trên máy mới)
yarn add esbuild --force     # Cài lại esbuild vào project, ép cài nếu có xung đột phiên bản

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -   # Thêm repo Node.js 18.x (Linux)
sudo apt install -y nodejs   # Cài Node.js trên Linux
apt-get install -y nodejs    # Cài Node.js nếu dùng apt-get (Debian/Ubuntu)

########## 5. Reinstall Playwright & Dappwright ##########
# Install Playwright browsers
yarn playwright install                       # Tải browser (Chromium, Firefox, WebKit) mà Playwright cần
yarn playwright install --with-deps           # Tải browser + runtime dependencies (ffmpeg, fonts, codecs…) — dùng khi setup mới
yarn add @playwright/test@latest @tenkeylabs/dappwright           # Cài Playwright test và Dappwright bản mới nhất
# yarn add @playwright/test@1.48.2 @tenkeylabs/dappwright         # Cài phiên bản cũ 1.48.2 (nếu cần test với bản cũ)

########## 6. Install Node and Yarn (IF NEED) ##########
# YARN
yarn add ethers              # Cài thư viện ethers.js để tương tác blockchain
yarn add -D @types/node      # Cài type definitions cho Node.js (chỉ dùng cho TypeScript)
npm install -g typescript    # Cài TypeScript toàn hệ thống (nếu code TS)

# NODE
npm install playwright axios # Cài Playwright và Axios qua npm (nếu muốn chạy bằng npm thay vì Yarn)

########## 7. Fix esbuild (if needed) ##########
npm install                         # Cài lại toàn bộ dependencies qua npm (ít dùng nếu đã dùng Yarn)
npm install esbuild --force         # Ép cài lại esbuild qua npm nếu Yarn không fix được
ls -l node_modules/esbuild/bin/     # Kiểm tra xem file thực thi esbuild đã có chưa

```

#######################################################################################
### Part 2 - CMD
git init
git remote add origin https://github.com/chaukhau19/AIOZ-PIN.git
git remote set-url origin https://github.com/chaukhau19/AIOZ-PIN.git
git pull origin main --allow-unrelated-histories
git add .
git commit -m "Initial commit - upload existing project"
git push origin main
git push -u origin main
git push origin master --force
#######################################################################################

### Part 3 - Error Jenkins and Fix

```bash
# ERROR:
    # PS C:\Worker_KhauNTC\Github\AIOZ-PIN-NETWORK> npm run test:ConnectMetaMask
    # npm : File C:\nvm4w\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at 
    # https:/go.microsoft.com/fwlink/?LinkID=135170.
    # At line:1 char:1
    # + npm run test:ConnectMetaMask
    # + ~~~
    #     + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    #     + FullyQualifiedErrorId : UnauthorizedAccess
    # PS C:\Worker_KhauNTC\Github\AIOZ-PIN-NETWORK>

---> 
Chạy PowerShell với quyền Administrator
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
<---

########################################################################
# ERROR:
# Error: ENOENT: no such file or directory, mkdir ''

#        at ..\Pages\1_Dapps\SetupMetaMask.js:10

#        8 |       if (!sharedContext) {
#        9 |         try {
#     > 10 |           const [wallet, _, context] = await Promise.race([
#          |                                        ^

---> 
npx playwright install 
<---
```
