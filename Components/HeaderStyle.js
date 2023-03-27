import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        paddingHorizontal: 20,
        top: 50,
        width: '100%',
        zIndex: 100,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: "contain",
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: "contain",

    }
})

export default styles;