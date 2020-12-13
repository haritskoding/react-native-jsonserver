import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Alert
} from 'react-native'
import { ListData, PostData } from './Screen';
import Axios from 'axios';
import { Colors, PRIMARY } from './Utils/Colors'

const App = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState("false");
    const [button, setButton] = useState("Simpan");
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let repeat;
        try {

            await Axios.get("https://teguh-rn1-ujian.herokuapp.com/data")

                .then(res => {
                    console.log('item: ', res.data);
                    setUsers(res.data);
                    console.log(users, 'ds')
                })

            repeat = setTimeout(getData, 1000)
        } catch (error) {
            console.error(error.message)
        }

    }


    const selectItem = (item) => {
        console.log('selected item ', item);
        setName(item.name);
        setSelectedUser(item);
        console.log('ss: ', selectedUser)
        setPhone(item.phone);
        setAddress(item.address);
        setButton("Update");
    }

    const deleteItem = (item) => {
        console.log(item);
        Axios.delete(`https://teguh-rn1-ujian.herokuapp.com/data/${item.id}`)
            .then(res => {
                console.log(`https://teguh-rn1-ujian.herokuapp.com/data/${item.id}`, res);
                getData();
            })
    }


    return (
        <>
            {/*judul*/}
            <View style={styles.container}>
                <Text style={styles.heading1}>
                    React native Post
            </Text>
                <Text style={styles.heading}>
                    Created By &copy; <Text style={styles.heading1}>Teguh Harits</Text>
                </Text>
            </View>

            {/*component kita */}
            <PostData
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                address={address}
                setAddress={setAddress}
                title={button}
                setTitle={setButton}
                getData={getData}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
            />
            <View style={styles.line} />
            <ScrollView>
                {
                    users ? users.map(
                        user => {
                            return (<ListData
                                id={user.id}
                                key={user.id}
                                name={user.name}
                                phone={user.phone}
                                onPress={() => selectItem(user)}
                                onDelete={() => Alert.alert(
                                    'Peringatan',
                                    'Yakin ingin menghapus?',
                                    [
                                        {
                                            text: 'Tidak', onPress: () => console.log('button tidak')
                                        },
                                        { text: 'Iya', onPress: () => deleteItem(user) }
                                    ]
                                )
                                }
                                address={user.address}
                            />)
                        }) : <Text style={styles.empty}>DATA MASIH KOSONG</Text>
                }
            </ScrollView>
        </>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center'
    },
    empty: {
        fontSize: 22,
        marginLeft: 33,
        fontWeight: 'bold'
    },
    heading: {
        fontSize: 20,
    },
    heading1: {
        fontSize: 21,
        color: Colors.PRIMARY,
        fontWeight: "bold",
        marginTop: 29
    },
    line: {
        height: 3,
        width: '80%',
        marginTop: 10,
        marginLeft: '10%',
        marginBottom: 8,
        backgroundColor: Colors.BLACK
    }
})
