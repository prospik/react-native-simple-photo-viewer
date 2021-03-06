
# react-native-simple-photo-viewer

## Demonstration

#### iOS

![](https://github.com/SevenSwen/react-native-simple-photo-viewer/blob/master/SimplePhotoViewer.gif)

## Getting started

`$ npm install react-native-simple-photo-viewer --save`

### Mostly automatic installation

`$ react-native link react-native-simple-photo-viewer`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-simple-photo-viewer` and add `RNSimplePhotoViewer.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSimplePhotoViewer.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNSimplePhotoViewerPackage;` to the imports at the top of the file
  - Add `new RNSimplePhotoViewerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-simple-photo-viewer'
  	project(':react-native-simple-photo-viewer').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-simple-photo-viewer/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-simple-photo-viewer')
  	```

## Usage
```javascript
import RNSimplePhotoViewer from 'react-native-simple-photo-viewer';

RNSimplePhotoViewer;
```
  
