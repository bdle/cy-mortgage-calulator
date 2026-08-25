import { defineConfig } from 'cypress';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { readFileSync } from 'fs';

// Read service account from file or environment variable (for CI/CD)
let serviceAccount;
// make sure create a Github Actions secret key FIREBASE_SERVICE_ACCOUNT
// and store all raw data from serviceAccount.json which is generated from Firebase service account credentials
// Go to the Firebase Console $\rightarrow$ Project settings (⚙️).
// Select the Service accounts tab and click Generate new private key.
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
  serviceAccount = JSON.parse(
    readFileSync(new URL('serviceAccount.json', import.meta.url))
  );
}

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}
export default defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async getAuthToken(uid) {
          const auth = getAuth();
          // Create or update the test user with a display name and email
          try {
            await auth.updateUser(uid, {
              displayName: Cypress.env('user').displayName,
              email: Cypress.env('user').email,
            });
          } catch (error) {
            if (error.code === 'auth/user-not-found') {
              await auth.createUser({
                uid,
                displayName: Cypress.env('user').displayName,
                email: Cypress.env('user').email,
              });
            }
          }
          return await auth.createCustomToken(uid);
        },
      });
      return config;
    },
    baseUrl: 'https://bdle.github.io/mortgage-calculator/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    testIsolation: true,
  }
});