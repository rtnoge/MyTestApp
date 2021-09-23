import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import macbook from '../../assets/image/macbook-pro-silver.jpg'

const Product = (props) => {
    return (
        <View style={styles.wrapper}>
          <Image 
          source={macbook}
          style={styles.imgProduct} 
          />
          <Text style={styles.productName}>New Macbook Pro M1 2020</Text>
          <Text style={styles.productPrice}>Rp. 25.000.000</Text>
          <Text style={styles.location}>Jakarta Barat</Text>
          <TouchableOpacity onPress={props.onButtonPress}>
            <View style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>BELI</Text>
            </View>
          </TouchableOpacity>
        </View>
    )
}

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: "#F2F2F2",
    width: 212,
    borderRadius: 8,
  },
  imgProduct: { width: 188, height: 107, borderRadius: 8 },
  productName: { fontSize: 14, fontWeight: "bold", marginTop: 16 },
  productPrice: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 12,
    color: "#F2994A",
  },
  location: { fontSize: 12, fontWeight: "300", marginTop: 12, color: "black" },
  buttonWrapper: {
    backgroundColor: "#6FCF97",
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
