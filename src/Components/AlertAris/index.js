import React from 'react'
import {
    Alert,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

const AlertAris = () => {

    const showAlert = () => {
        Alert.alert(
            'You need to...'
        )
    }

    return (
        <TouchableOpacity onPress={showAlert} style={styles.myAlert}>
            <Text>Alert</Text>
        </TouchableOpacity>
    )
}

export default AlertAris

const styles = StyleSheet.create({
    myAlert: {
        backgroundColor: '#4ba37b',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 100
    }
})
