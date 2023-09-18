import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'angular-books',
  webDir: 'dist/angular-crash-cards', // "www"
  server: {
    androidScheme: 'https'
  }
};

export default config;
