import React from 'react';

import {View,Image} from 'react-native'

import styles from './HeaderStyle'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../img/logo.png')}></Image>
            <Image style={styles.log} source={require('../img/menu.png')}></Image>
        </View>
    )
}

export default Header