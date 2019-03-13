import { Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {

    return <Text style={styles.bigBlue}> Albums sdfsfsd!</Text>;
};

const styles = StyleSheet.create({
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20,
    },
    red: {
      color: 'red',
    },
  });

export default Header;
