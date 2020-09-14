import React from "react";
import { Text } from "react-native-web";
import { ActivityIndicator } from "react-native-web";

export default { title: "Hello World" };

export const withText = () => <div>Hello World</div>;

export const reactNative = () => <Text>React Native Web is Awesome!</Text>;

export const reactNativeActivity = () => <ActivityIndicator />;
