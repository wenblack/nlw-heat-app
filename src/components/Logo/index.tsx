import React from 'react';
import {
    Image
} from 'react-native';

import { styles } from './styles'

export function Logo() {
    return (
        <Image
            style={styles.image}
            source={require('../../assets/svg.png')}
        />
    );
}