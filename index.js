/**
 * @format
 */
import {AppRegistry} from 'react-native';
import React from 'react';
import Header from './src/components/header';

const CONSI = () =>{
    return <Header/>;
};

AppRegistry.registerComponent('albums', () => CONSI);