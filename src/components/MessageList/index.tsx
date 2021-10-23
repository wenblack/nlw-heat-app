import React from 'react';

import {
    ScrollView
} from 'react-native';

import { Message } from '../Message';
import { styles } from './styles';


const message = {
    id: "1",
    text: "Mensagem de teste",
    user: {
        name: "Wen",
        avatar_url: 'https://github.com/wenblack.png'
    }
};

export function MessageList() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contet}
            keyboardShouldPersistTaps="never"
        >
            <Message
                data={message}
            />
            <Message
                data={message}
            />
            <Message
                data={message}
            />
            <Message
                data={message}
            />
            <Message
                data={message}
            />
        </ScrollView>
    );
}