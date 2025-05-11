# Test info

- Name: Login Functionality with Multiple Valid Users >> should handle login for username: problem_user
- Location: C:\Senior-test-engineer-assessment\tests\login.spec.ts:7:9

# Error details

```
Error: browserContext._wrapApiCall: Test ended.
Browser logs:

<launching> C:\Users\rahul\AppData\Local\ms-playwright\firefox-1482\firefox\firefox.exe -no-remote -wait-for-browser -foreground -profile C:\Users\rahul\AppData\Local\Temp\playwright_firefoxdev_profile-LsJDIV -juggler-pipe -silent
<launched> pid=30404
[pid=30404][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 116: unreachable code after return statement
[pid=30404][out] console.warn: services.settings: Ignoring preference override of remote settings server
[pid=30404][out] console.warn: services.settings: Allow by setting MOZ_REMOTE_SETTINGS_DEVTOOLS=1 in the environment
[pid=30404][out] 
[pid=30404][out] Juggler listening to the pipe
[pid=30404][out] console.error: "Warning: unrecognized command line flag" "-foreground"
[pid=30404][err] JavaScript error: chrome://juggler/content/Helper.js, line 82: NS_ERROR_FAILURE: Component returned failure code: 0x80004005 (NS_ERROR_FAILURE) [nsIWebProgress.removeProgressListener]
[pid=30404][err] Exiting due to channel error.
```

# Test source

```ts
   1 | import { test } from '@playwright/test';
   2 | import { LoginPage } from '../pages/LoginPage';
   3 | import { validUsers, validPassword } from '../test-data/users.ts'; // adjust path as needed
   4 |
   5 | test.describe('Login Functionality with Multiple Valid Users', () => {
   6 |   for (const username of validUsers) {
>  7 |     test(`should handle login for username: ${username}`, async ({ page }) => {
     |         ^ Error: browserContext._wrapApiCall: Test ended.
   8 |       const loginPage = new LoginPage(page);
   9 |
  10 |       await loginPage.goto();
  11 |       await loginPage.login(username, validPassword);
  12 |
  13 |       if (username === 'locked_out_user') {
  14 |         await loginPage.assertLoginFailure('locked out');
  15 |       } else {
  16 |         await loginPage.assertLoginSuccess();
  17 |       }
  18 |     });
  19 |   }
  20 | });
  21 |
```