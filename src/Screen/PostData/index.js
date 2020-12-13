import React, { useState } from 'react'
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { Button, AlertAris } from '../../Components';
import Axios from 'axios'



const PostData = ({
    name, setName,
    phone, setPhone,
    address, setAddress,
    title, selectedUser,
    getData, setTitle
}) => {

    const [isFocused, setIsFocused] = useState(false);



    const submit = () => {

        const data = {
            name,
            phone,
            address
        }
        console.log(`data before send ${data}`);

        if (data.name === '') {
            Alert.alert('Peringatan', 'Nama Harus diisi')
        }

        else if (data.phone === '') {
            Alert.alert('Peringatan', 'Telepon Harus diisi')
        }

        else if (data.address === '') {
            Alert.alert('Peringatan', 'Alamat Harus diisi')

        } else if (data.name !== '' && data.phone !== '' && data.address !== '') {

            if (title === 'Simpan') {
                Axios.post('https://teguh-rn1-ujian.herokuapp.com/data', data)
                    .then(res => {
                        console.log('res: ', res);
                        setName("");
                        setPhone("");
                        setAddress("");
                    })
            } else if (title === "Update") {
                Axios.put(`https://teguh-rn1-ujian.herokuapp.com/data/${selectedUser.id}`, data)
                    .then(res => {
                        console.log(selectedUser);
                        console.log('res update: ', res.data);
                        setName("");
                        setPhone("");
                        setAddress("");
                        getData();
                        setTitle("Simpan")
                    })
            }
        }


    }

    return (
        <>
            <View style={styles.form}>
                {/*name */}
                <Text style={styles.inpText}>Masukan Nama Lengkap</Text>
                <TextInput
                    value={name}
                    onChangeText={(value) => setName(value)}
                    style={styles.textInput}
                    placeholder="Enter Your First Name eg. Teguh" />
                {/*phone*/}
                <Text style={styles.inpText}>Masukan No Telepon</Text>
                <TextInput
                    value={phone}
                    onChangeText={(value) => setPhone(value)}
                    style={styles.textInput}
                    style={styles.textInput}
                    placeholder="Enter Your First Name eg.0813 1212 333" />
                {/*address*/}
                <Text style={styles.inpText}>Alamat Lengkap</Text>
                <TextInput
                    value={address}
                    onChangeText={(value) => setAddress(value)}
                    style={styles.textInput}
                    style={styles.textArea}
                    placeholder="Enter Your Adrress eg. JL Haji Jono" />
                <Button title={title} onPress={submit} />
            </View>

        </>
    )
}

export default PostData

const styles = StyleSheet.create({
    form: {
        marginTop: 25,
        display: 'flex',
        width: "80%",
        marginLeft: 30,
        justifyContent: 'flex-start'

    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 14,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        backgroundColor: '#ffffff',
        alignItems: "stretch",
        height: 50,
        borderRadius: 10,
        borderBottomColor: 'gray',

    },
    textArea: {
        borderWidth: 1,
        height: 120,
        paddingHorizontal: 14,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        backgroundColor: '#ffffff',
        alignItems: "stretch",
        height: 50,
        borderRadius: 10,
        borderBottomColor: 'grey',

    },
    inpText: {
        fontSize: 15,
        fontWeight: "bold"
    }
})
