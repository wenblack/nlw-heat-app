import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 36,
    },
    message: {
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE,
        lineHeight: 20,
        fontSize: 15,
        marginBottom: 12

    },
    userProfile: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        color: COLORS.WHITE,
        fontSize: 15,
        marginLeft: 16,
        fontFamily: FONTS.REGULAR,
    }
});