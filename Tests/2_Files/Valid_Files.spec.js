// import { test } from "../../../Pages/1_Dapps/SetupCoinBase.js";
// import { ConnectWalletCoinBasePage } from "../../Pages/1_Dapps/01_CoinBase/CoinBase.js";

// let connectWalletCoinBasePage;

// test.beforeAll(async ({ page, wallet }) => {
//   connectWalletCoinBasePage = new ConnectWalletCoinBasePage(page);
//   await Promise.race([
//     connectWalletCoinBasePage.Connect_CoinBase(wallet),
//     new Promise((_, reject) => setTimeout(() => reject(new Error("Connect Wallet Timeout!")), 120000))
//   ]);
// });

// test.beforeEach(async ({ page }) => {
//   connectWalletCoinBasePage = new ConnectWalletCoinBasePage(page);
//   await page.waitForTimeout(1000);
// });

// test.afterEach(async ({ page }) => {
//   await page.close();
// });

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
