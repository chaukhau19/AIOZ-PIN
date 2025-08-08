//Shared Functions
import { test } from "../../../Pages/1_Dapps/SetupMetaMask.js";
import { ConnectWalletMetaMaskPage } from "../../../Pages/1_Dapps/02_MetaMask/MetaMask.js";
import { FunctionPage } from "../../../Pages/Functions.js";
//Dedicated functions
import { LoginPage } from "../../../Pages/1_Dapps/03_Login_Google/Valid_Login.js";
import { commoncfg_Account, commoncfg_Locator, commoncfg_Verify } from "../../../Data/Common.js";

let connectWalletMetaMaskPage;
let loginPage;
let functionPage;

test.beforeAll(async ({ page, wallet }) => {
//   connectWalletMetaMaskPage = new ConnectWalletMetaMaskPage(page);
//   loginPage = new LoginPage(page);
//   await Promise.race([
//     // connectWalletMetaMaskPage.Connect_MetaMask(wallet),
//     loginPage.Login_Google(wallet),
//     new Promise((_, reject) => setTimeout(() => reject(new Error("Connect Timeout!")), 120000))
//   ]);
});

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    functionPage = new FunctionPage(page);
});

test.afterEach(async ({ page }) => {
  await page.close();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

test("Login with Google", async ({ wallet, page }) => {
    await functionPage.TimeoutTest(loginPage.Login_Google.bind(loginPage), wallet);
    await functionPage.TimeoutTest(loginPage.Login_AIOZPin.bind(loginPage), wallet);
});
