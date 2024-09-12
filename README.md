First, you need to have the Ionic CLI installed globally. If you haven't done so already:
npm install -g @ionic/cli
For installing capacitor
ionic integrations enable capacitor
Now, add platforms (e.g., Android or iOS) depending on which native platform you are targeting.
For Android:
ionic capacitor add android
For iOS:
ionic capacitor add ios

You can run the development server:
ionic serve
This will start a local web server for web development, where you can test the UI in the browser. Keep in mind that Capacitor features (e.g., native plugins) won’t work in the browser but will work on actual devices.
When you are ready to build and test on an actual device (Android or iOS), first build the web assets:
ionic build
Then copy the web assets to the native platforms using:
npx cap copy
To open and run the app in Android Studio (for Android) or Xcode (for iOS):
For Android:
npx cap open android
For iOS:
npx cap open ios

For Installing icons
npm install ionicons
