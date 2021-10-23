import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


import { Logo } from '../Logo';
import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';

export function Header() {
    return (
        <View style={styles.container}>
            <Logo />

            <View style={styles.logoutArea}>
                <TouchableOpacity>
                    <Text style={styles.texto}>Sair </Text>
                </TouchableOpacity>

                <UserPhoto
                    imageUri='https://github.com/wenblack.png'
                />
            </View>
        </View>
    );
}