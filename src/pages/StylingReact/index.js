import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import macbook from "../../assets/image/macbook-pro-silver.jpg";

const StylingReact = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "grey",
          borderWidth: 2,
          borderColor: "pink",
          marginTop: 20,
          marginLeft: 20,
        }}
      />

      <View
        style={{
          padding: 12,
          backgroundColor: "#F2F2F2",
          width: 212,
          borderRadius: 8,
        }}
      >
        <Image
          source={macbook}
          style={{ width: 188, height: 107, borderRadius: 8 }}
        />
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 16 }}>
          New Macbook Pro M1 2020
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 12,
            color: "#F2994A",
          }}
        >
          Rp. 25.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "300",
            marginTop: 12,
            color: "black",
          }}
        >
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: "#6FCF97",
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "white",
              textAlign: "center",
            }}
          >
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingReact;
