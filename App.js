import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyActivityIndicator from './my-activities/MyActivityIndicator';
import MyButton from './my-activities/MyButton';
import MyFlatList from './my-activities/myFlatList';
import MyImage from './my-activities/MyImage';
import MyImageBackground from './my-activities/MyImageBackground';
import MyKeyboardAvoidingView from './my-activities/MyKeyboardAvoidingView';
import MyModal from './my-activities/MyModal';
import MyPressable from './my-activities/MyPressable';
import MyRefreshControl from './my-activities/MyRefreshControl';
import MyScrollView from './my-activities/MyScrollView';
import MySectionList from './my-activities/MySectionList';
import MyStatusBar from './my-activities/MyStatusBar';
import MySwitch from './my-activities/MySwitch';
import MyText from './my-activities/MyText';
import MyTextInput from './my-activities/MyTextInput';
import MyTouchableHighlight from './my-activities/MyTouchableHighlight';
import MyTouchableOpacity from './my-activities/MyTouchableOpacity';
import MyTouchableWithoutFeedback from './my-activities/MyTouchableWithoutFeedback';
import MyView from './my-activities/MyView';
import MyVirtualizedList from './my-activities/MyVirtualizedList';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyActivityIndICAtor /> */}
      {/* <MyButton /> */}
      {/* <MyFlatList />
      {/* <MyImage /> */}
      {/* <MyImageBackground /> */}
      {/* <MyKeyboardAvoidingView /> */}
      {/* <MyModal /> */}
      {/* <MyPressable /> */}
      {/* <MyRefreshControl /> */}
      {/* <MyScrollView /> */}
      {/* <MySectionList /> */}
      {/* <MyStatusBar /> */}
      {/* <MySwitch /> */}
      {/* <MyText /> */}
      {/* <MyTextInput /> */}
      {/* <MyTouchableHighlight /> */}
      {/* <MyTouchableOpacity /> */}
      {/* <MyTouchableWithoutFeedback /> */}
      {/* <MyView /> */}
      {/* <MyVirtualizedList /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
