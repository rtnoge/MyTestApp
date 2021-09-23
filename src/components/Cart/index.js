import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Cart from "../../assets/icon/cart.png";

const index = (props) => {
    return (
        <View>
            <View style={styles.wrapper}>
                <Text>Materi Position</Text>
                <View style={styles.cartWrapper}>
                <Image source={Cart} style={styles.iconCart} />
                <Text style={styles.notif}>{props.qty}</Text>
                </View>
                <Text style={styles.text}>Keranjangku</Text>
            </View>
        </View>
    );
}

export default index

const styles = StyleSheet.create({
    wrapper: { padding: 20, alignItems: "center" },
  cartWrapper: {
    borderWidth: 1,
    borderColor: "#4398D1",
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    marginTop: 20
  },
  iconCart: { width: 50, height: 50 },
  text: { fontSize: 12, color: "#777777", fontWeight: "700", marginTop: 8 },
  notif: {
    fontSize: 12,
    color: "white",
    backgroundColor: "red",
    padding: 4,
    borderRadius: 25,
    height: 24,
    width: 24,
    position: 'absolute',
    top: 0,
    right: 0
  },
})
