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

### Part 2 - Cmd Git

```bash
########## 1. New User (Empty local and empty repo) ##########
# 1. Tạo folder mới và vào đó
cd AIOZ-PIN
# 2. Khởi tạo Git local
git init
# 3. Kết nối tới repo GitHub
git remote add origin https://github.com/chaukhau19/AIOZ-PIN.git
git remote set-url origin https://github.com/chaukhau19/AIOZ-PIN.git
# 4. (Optional) Nếu repo GitHub đã có README.md thì pull về
git pull origin main --allow-unrelated-histories
# 5. Thêm code vào (copy hoặc tạo mới file)
# ...
# 6. Stage file để commit
git add .
# 7. Commit
git commit -m "Initial commit - upload existing project"
# 8. Push lên GitHub
git push origin main        # nếu branch là main
git push -u origin main     # set upstream
# 9. Nếu branch local là master thì:
git push origin main --force
```
```bash
########## 2. New User (Already have local project, want to sync to new repo) ##########
# 1. Vào folder project đã có sẵn
cd 
# 2. Khởi tạo Git (nếu chưa có .git)
git init
# 3. Kết nối tới repo GitHub
git remote add origin https://github.com/chaukhau19/AIOZ-PIN.git
git remote set-url origin https://github.com/chaukhau19/AIOZ-PIN.git
# 4. Nếu repo GitHub đã có README.md thì pull về (merge histories)
git pull origin main --allow-unrelated-histories
# 5. Stage toàn bộ file
git add .
# 6. Commit
git commit -m "Initial commit - upload existing project"
# 7. Push lên GitHub
git push origin main        # nếu branch là main
git push -u origin main
# hoặc nếu branch local là master
git push origin master --force
```
```bash
########## 3. Git Common Commands ##########
# 1. Kiểm tra remote hiện tại
git remote -v
# 2. Xoá remote
git remote remove origin
# 3. Kiểm tra branch hiện tại
git branch
# 4. Đổi tên branch local
# Nếu đang ở branch đó:
git branch -m main
# Nếu đổi tên branch khác:
git branch -m old_name new_name
# 5. Xoá Git local (xoá toàn bộ history, giữ lại code)
rm -rf .git
# 6. Kiểm tra lịch sử commit
git log
# 7. Xem cấu hình Git hiện tại
git config --list
# 8. Chuyển branch
git checkout branch_name
# Tạo mới branch và chuyển sang luôn
git checkout -b new_branch
# 9. Merge branch (gộp branch khác vào branch hiện tại)
git merge other_branch
# 10. Xem sự khác biệt chưa commit
git diff
# 11. Xoá branch local
git branch -d branch_name
# 12. Xoá branch trên remote
git push origin --delete branch_name
```

#######################################################################################

### Part 3 - Cmd Playwright 

```bash
########## 1. Run Tests ##########
yarn playwright test                      # Chạy toàn bộ test
yarn playwright test example.spec.ts      # Chạy 1 file test cụ thể
yarn playwright test -g "Test case name"  # Chạy test theo tên (regex match)

########## 2. Run With Browser UI ##########
yarn playwright test --headed             # Chạy test có hiển thị browser UI
yarn playwright test --browser=chromium   # Chạy chỉ với Chromium
yarn playwright test --browser=firefox    # Chạy chỉ với Firefox
yarn playwright test --browser=webkit     # Chạy chỉ với WebKit

########## 3. Debug Tests ##########
yarn playwright test --debug              # Mở Playwright Inspector để debug
yarn playwright test --trace on           # Luôn bật trace
yarn playwright show-trace trace.zip      # Xem file trace đã lưu

########## 4. Record New Test ##########
yarn playwright codegen                   # Mở trình ghi thao tác (codegen)
yarn playwright codegen https://example.com

########## 5. View Reports ##########
yarn playwright show-report               # Mở HTML report sau khi test
yarn playwright test --reporter=list      # Chạy với reporter list
yarn playwright test --reporter=html      # Chạy và xuất HTML report

########## 6. Install / Update Browsers ##########
yarn playwright install                   # Tải Chromium, Firefox, WebKit
yarn playwright install --with-deps       # Tải browsers + dependencies (Linux mới setup)
yarn playwright install chromium          # Chỉ cài Chromium
yarn playwright install firefox           # Chỉ cài Firefox
yarn playwright install webkit            # Chỉ cài WebKit

########## 7. Misc Useful Commands ##########
yarn playwright --version                 # Kiểm tra phiên bản Playwright
yarn add @playwright/test@latest          # Cài/Update Playwright Test
yarn add -D @playwright/test              # Cài Playwright Test dạng devDependencies
```

#######################################################################################

### Part 4 - Error Jenkins and Fix

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
