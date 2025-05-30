import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // appId: com.[yourdomain].[yourappname]
  appId: 'com.mycomp.myapp',
  appName: 'app',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  ios: {},
  android: {},
  plugins: {},
};

export default config;
