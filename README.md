# Playwright

#######################################################################################

### Part 1 - Installation Library   

```bash
########## 1. Check Versions ##########
node -v                           # Check installed Node.js version
npm -v                            # Check installed npm version
yarn -v                           # Check installed Yarn version
yarn playwright --version         # Check Playwright version installed via Yarn
npm playwright --version          # Check Playwright version installed via npm

########## 2. Uninstall All Dependencies ##########
# FOR LINUX / MAC / GIT BASH
rm -rf node_modules package-lock.json yarn.lock playwright-report test-results
# Remove all installed dependencies, lock files, reports, and test results

# FOR WINDOWS PowerShell (run each separately)
Remove-Item -Recurse -Force node_modules                     # Remove node_modules folder
Remove-Item -Force package-lock.json, yarn.lock              # Remove npm & Yarn lock files
Remove-Item -Recurse -Force playwright-report, test-results  # Remove reports & test results

########## 3. Remove Old Playwright & Dappwright ##########
yarn remove playwright @playwright/test @tenkeylabs/dappwright    # Remove Playwright/Dappwright installed via Yarn
npm uninstall playwright @playwright/test @tenkeylabs/dappwright  # Remove Playwright/Dappwright installed via npm

########## 4. Reinstall Core Tools ##########
yarn install                 # Reinstall dependencies from package.json (use after cloning repo or deleting node_modules)
npm install -g yarn          # Install Yarn globally (run once on a new machine)
yarn add esbuild --force     # Reinstall esbuild in the project, force if version conflict

# Install Node.js 18.x on Linux
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
# Or (Debian/Ubuntu alternative)
apt-get install -y nodejs

########## 5. Reinstall Playwright & Dappwright ##########
# Install Playwright browsers
yarn playwright install                       # Download browsers (Chromium, Firefox, WebKit)
yarn playwright install --with-deps           # Download browsers + runtime dependencies (ffmpeg, fonts, codecs…)
yarn add @playwright/test@latest @tenkeylabs/dappwright           # Install latest Playwright Test + Dappwright
# yarn add @playwright/test@1.48.2 @tenkeylabs/dappwright         # Install specific older version (example: 1.48.2)

########## 6. Install Node and Yarn Dependencies (IF NEEDED) ##########
# Yarn installs
yarn add ethers              # Install ethers.js for blockchain interaction
yarn add -D @types/node      # Install Node.js type definitions (TypeScript only)
npm install -g typescript    # Install TypeScript globally (if coding in TS)
# npm installs
npm install playwright axios # Install Playwright & Axios via npm instead of Yarn

########## 7. Fix esbuild (if needed) ##########
npm install                         # Reinstall dependencies via npm (rarely used if using Yarn)
npm install esbuild --force         # Force reinstall esbuild via npm if Yarn fails
ls -l node_modules/esbuild/bin/     # Check if esbuild executable exists
```

#######################################################################################

### Part 2 - Cmd Git

```bash
########## 1. New User (Empty local folder and empty GitHub repo) ##########
# 1. Create a new folder and navigate into it
cd AIOZ-PIN
# 2. Initialize a local Git repository
git init
# 3. Connect to GitHub repository
git remote add origin https://github.com/chaukhau19/AIOZ-PIN.git
git remote set-url origin https://github.com/chaukhau19/AIOZ-PIN.git
# 4. (Optional) If GitHub repo already has README.md, pull it
git pull origin main --allow-unrelated-histories
# 5. Add your project files (copy or create new files)
# ...
# 6. Stage all files for commit
git add .
# 7. Commit changes
git commit -m "Initial commit - upload existing project"
# 8. Push to GitHub
git push origin main        # if your branch is main
git push -u origin main     # set upstream for future pushes
# 9. If your local branch is master but remote uses main:
git push origin main --force
```

```bash
########## 2. New User (Already have local project, want to sync to new repo) ##########
# 1. Go to your existing project folder
cd /path/to/project
# 2. Initialize Git (only if .git does not exist)
git init
# 3. Connect to GitHub repository
git remote add origin https://github.com/chaukhau19/AIOZ-PIN.git
git remote set-url origin https://github.com/chaukhau19/AIOZ-PIN.git
# 4. If GitHub repo already has README.md, pull it (merge histories)
git pull origin main --allow-unrelated-histories
# 5. Stage all files
git add .
# 6. Commit changes
git commit -m "Initial commit - upload existing project"
# 7. Push to GitHub
git push origin main        # if branch is main
git push -u origin main
# Or if local branch is master but remote uses main
git push origin master --force
```

```bash
########## 3. Git Common Commands ##########
# 1. Check current remote
git remote -v
# 2. Remove remote
git remote remove origin
# 3. Check current branch
git branch
# 4. Rename local branch
# If you are on the branch you want to rename:
git branch -m main
# Rename a different branch:
git branch -m old_name new_name
# 5. Delete local Git history (keep code, remove .git folder)
rm -rf .git
# 6. View commit history
git log
# 7. View current Git configuration
git config --list
# 8. Switch branch
git checkout branch_name
# Create a new branch and switch to it
git checkout -b new_branch
# 9. Merge another branch into current branch
git merge other_branch
# 10. See unstaged changes
git diff
# 11. Delete local branch
git branch -d branch_name
# 12. Delete branch on remote
git push origin --delete branch_name
```

#######################################################################################

### Part 3 - Cmd Playwright 

```bash
########## 1. Run Tests ##########
yarn playwright test                      # Run all tests
yarn playwright test example.spec.ts      # Run a specific test file
yarn playwright test -g "Test case name"  # Run tests matching name (regex search)

########## 2. Run With Browser UI ##########
yarn playwright test --headed             # Run tests with browser UI visible
yarn playwright test --browser=chromium   # Run tests only in Chromium
yarn playwright test --browser=firefox    # Run tests only in Firefox
yarn playwright test --browser=webkit     # Run tests only in WebKit

########## 3. Debug Tests ##########
yarn playwright test --debug              # Open Playwright Inspector for debugging
yarn playwright test --trace on           # Always enable trace recording
yarn playwright show-trace trace.zip      # View a saved trace file

########## 4. Record New Test ##########
yarn playwright codegen                   # Open code generator to record actions
yarn playwright codegen https://example.com  # Start recording at a given URL

########## 5. View Reports ##########
yarn playwright show-report               # Open the HTML report after test run
yarn playwright test --reporter=list      # Run tests with "list" reporter
yarn playwright test --reporter=html      # Run tests and generate HTML report

########## 6. Install / Update Browsers ##########
yarn playwright install                   # Install Chromium, Firefox, and WebKit
yarn playwright install --with-deps       # Install browsers + runtime dependencies (Linux fresh setup)
yarn playwright install chromium          # Install only Chromium
yarn playwright install firefox           # Install only Firefox
yarn playwright install webkit            # Install only WebKit

########## 7. Misc Useful Commands ##########
yarn playwright --version                 # Check Playwright version
yarn add @playwright/test@latest          # Install or update Playwright Test to latest
yarn add -D @playwright/test               # Install Playwright Test as devDependency
```

#######################################################################################

### Part 4 - Source Folder

```bash 
AIOZ-PIN/
│
├── CustomLibs/                  # Custom utility libraries to extend Playwright capabilities
│   ├── Csv.js                   # Handles reading/writing CSV files
│   ├── Excel.js                 # Handles reading/writing Excel files
│   ├── ReadDataExcel.js         # Fetches and parses test data from Excel sheets
│   ├── SendEmail.js             # Sends automated test reports via email
│
├── Data/                        # Centralized test data for all modules
│   ├── Common.js                # Shared/global constants and variables
│   ├── DappsData.js             # Test data for Dapps module
│   ├── FilesData.js             # Test data for Files module
│
├── Pages/                       # API handler functions and reusable actions
│   ├── Dapps/                   # API interaction scripts for Dapps
│   │   ├── CoinBase.js          # Coinbase-specific API handlers
│   │   ├── MetaMask.js          # MetaMask-specific API handlers
│   │   ├── SetupCoinBase.js     # Pre-test setup for Coinbase
│   │   ├── SetupMetaMask.js     # Pre-test setup for MetaMask
│   ├── Files/                   # API interaction scripts for Files
│   │   ├── FilesValid.js        # Valid Files scenarios
│   │   ├── FilesInvalid.js      # Invalid Files scenarios
│   ├── Functions.js             # Common reusable functions across modules
│
├── Tests/                       # Organized test cases
│   ├── Dapps/                   
│   │   ├── CoinBase.spec.js      # Test cases for Coinbase integration
│   │   ├── MetaMask.spec.js      # Test cases for MetaMask integration
│   ├── Files/
│   │   ├── FilesValid.spec.js    # Valid test cases for Files
│   │   ├── FilesInvalid.spec.js  # Invalid test cases for Files
│
├── SendEmail.spec.js             # Standalone test to send email reports
├── AIOZ_PIN.bat                  # Quick launch script for Windows
├── playwright.config.js          # Playwright global configuration
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
```

#######################################################################################

### Part 5 - Error Jenkins and Fix

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
