//Libs
import React from 'react';
import {
    Text,
    View
} from 'react-native';

//Componets
import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';

//interfaces/Tipagem
export type MesssageProps = {
    id: string;
    text: string;
    user: {
        name: string,
        avatar_url: string
    }
}
type Props = {
    data: MesssageProps
}

//Main
export function Message({ data }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                {data.text}
            </Text>

            <View style={styles.userProfile}>
                <UserPhoto
                    imageUri={data.user.avatar_url}
                    sizes="SMALL"
                />

                <Text style={styles.userName}>
                    {data.user.name}
                </Text>

            </View>

        </View>
    );
}