import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';
import { FONTS } from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    logoutArea: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    texto: {
        color: COLORS.WHITE,
        fontFamily: FONTS.REGULAR,
        fontSize: 15,
        margin: 10
    },
});