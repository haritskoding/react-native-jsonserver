import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Axios from "axios";
import { Colors } from '../../Utils/Colors';


const ListData = ({
    id,
    name,
    phone,
    address,
    onDelete,
    onPress }) => {


    return (
        <View style={styles.list}>
            <View style={{ "flexDirection": "row" }}>
                <Text style={styles.item}>ID : <Text style={styles.id}>{id}</Text></Text>

                <View style={styles.layOutBTN}>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.fontBTN("update")}>Ubah</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onDelete}>
                        <Text style={styles.fontBTN()}>Hapus</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.item}>Nama : <Text style={{ fontWeight: 'bold' }}>{name}</Text></Text>
                <Text style={styles.item}>No Telp: <Text style={{ fontWeight: 'bold' }}>{phone}</Text></Text>
                <Text style={styles.item}>Alamat: <Text style={{ fontWeight: 'bold' }}>{address}</Text></Text>
            </View>

        </View>
    )
}

export default ListData

const styles = StyleSheet.create({
    id: {
        color: "#191970",
        marginLeft: 30,
        fontSize: 19,
        fontWeight: 'bold'
    },
    list: {

        marginTop: 21,
        display: 'flex',
        width: "80%",
        marginLeft: 30,
        justifyContent: 'flex-start',
        backgroundColor: Colors.SECONDARY,
        borderRadius: 10,
        padding: 15,
    },
    item: {
        color: "white",
        fontSize: 17
    },
    layOutBTN: {
        flexDirection: 'row',
        marginLeft: "30%"
    },
    fontBTN: type => ({
        fontSize: 20,
        fontWeight: "bold",
        color: type === 'update' ? Colors.PRIMARY : Colors.RED,
        marginLeft: 20
    }),

})
