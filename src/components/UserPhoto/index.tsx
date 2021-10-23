//Bibliotecas
import React from 'react';
import {
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//Estilos e Assets
import { styles } from './styles';
import { COLORS } from '../../theme';

//Constantes e tipos
const SIZES = {
    SMALL: {
        container: 32,
        avatarSize: 28
    },
    NORMAL: {
        container: 48,
        avatarSize: 42
    }
}

type Props = {
    imageUri: string | undefined;
    sizes?: 'SMALL' | 'NORMAL';

}


export function UserPhoto({ imageUri, sizes = 'NORMAL' }: Props) {
    const { container, avatarSize } = SIZES[sizes];

    return (
        <LinearGradient
            colors={[COLORS.PINK, COLORS.YELLOW]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.9, y: 1 }}
            style={[
                styles.container,
                {
                    width: container,
                    height: container,
                    borderRadius: avatarSize / 2
                }
            ]}
        >
            <Image
                //Operador condicional para escolher entre as duas imagens
                source={{ uri: imageUri || require('../../assets/avatar.png') }}
                style={[
                    styles.image,
                    {
                        width: avatarSize,
                        height: avatarSize,
                        borderRadius: avatarSize / 2
                    }
                ]}
            />
        </LinearGradient>

    );
}