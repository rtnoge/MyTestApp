import React, { useEffect, useState } from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingReact from './pages/StylingReact';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';

const LineSeparator = () => (
  <View style={styles.separator}></View>
);

const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000)
  }, [])
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <LineSeparator />
        <StylingReact />
        <LineSeparator />
        <FlexBox />
        <LineSeparator />
        <PropsDinamis />
        <LineSeparator />
        <Position />
        <LineSeparator />
        {isShow && <FlexBox />}
        <StateDinamis />
        <LineSeparator />
        <Communication />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;