import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useState } from 'react';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { Theme } from './src/utils/theme';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus focusCurrentSubject={setCurrentSubject} />
      ) : (
        <Timer
          currentSubject={currentSubject}
          onTimerEnd={()=>{setCurrentSubject(null)}}
          clearSubject={()=>{setCurrentSubject(null)}}/>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Theme.colors.darkBlue,
    color: Theme.colors.white,
  },
});