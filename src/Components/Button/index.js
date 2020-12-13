import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { Colors } from '../../Utils/Colors';

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        marginLeft: 36,
        marginTop: 10,
        justifyContent: 'center',
        fontSize: 21,
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 15,
        width: "75%",
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        textAlign: 'center'
    }
})
