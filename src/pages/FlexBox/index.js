import React, { Component, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

class FlexBox extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('Hello constructor');

  //   this.state = {
  //     subreker: 1,
  //   }
  // }

  // componentDidMount() {
  //   console.log('Hello componentDidMount');
  //   setTimeout(() => {
  //     this.setState({
  //       subreker: 50,
  //     })
  //   }, 2000);
  // }
  
  // componentDidUpdate() {
  //   console.log('Hello componentDidUpdate');
  // }

  // componentWillUnmount() {
  //   console.log('Hello componentWillUnmount');
  // }

    render() {
        return (
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ height: 50, width: 50, backgroundColor: "red" }}
              ></View>
              <View
                style={{ height: 50, width: 50, backgroundColor: "yellow" }}
              ></View>
              <View
                style={{ height: 50, width: 50, backgroundColor: "green" }}
              ></View>
              <View
                style={{ height: 50, width: 50, backgroundColor: "blue" }}
              ></View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text>Beranda</Text>
              <Text>Video</Text>
              <Text>Playlist</Text>
              <Text>Komunitas</Text>
              <Text>Channel</Text>
              <Text>Tentang</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 20 }}>
              <Image
                source={{
                  uri:
                    "https://yt3.ggpht.com/ytc/AAUvwnh0-9zdo6y5xc-z928zzHsqqqkXoPRAj3obuQK_Xg=s176-c-k-c0x00ffffff-no-rj",
                }}
                style={{ height: 100, width: 100, borderRadius: 50, marginRight: 14 }}
              />
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Pecinta Ngudut</Text>
                {/* <Text>{this.state.subreker} jt subreker</Text> */}
                <Text>2 jt subreker</Text>
              </View>
            </View>
          </View>
        ); 
    }
}

// const FlexBox = () => {
//   const [subreker, setSubreker] = useState(5);
//   useEffect(()=>{
//     console.log("did mount");
//     setTimeout(() => {
//       setSubreker(10);
//     }, 2000);
//     return () => {
//       console.log("did update");
//     }
//   }, [subreker]);

//   // useEffect(()=>{
//   //   console.log("did update");
//   //   setTimeout(() => {
//   //     setSubreker(10);
//   //   }, 2000);
//   // }, [subreker]);

//   return (
//     <View>
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <View
//           style={{ height: 50, width: 50, backgroundColor: "red" }}
//         ></View>
//         <View
//           style={{ height: 50, width: 50, backgroundColor: "yellow" }}
//         ></View>
//         <View
//           style={{ height: 50, width: 50, backgroundColor: "green" }}
//         ></View>
//         <View
//           style={{ height: 50, width: 50, backgroundColor: "blue" }}
//         ></View>
//       </View>
//       <View
//         style={{ flexDirection: "row", justifyContent: "space-around" }}
//       >
//         <Text>Beranda</Text>
//         <Text>Video</Text>
//         <Text>Playlist</Text>
//         <Text>Komunitas</Text>
//         <Text>Channel</Text>
//         <Text>Tentang</Text>
//       </View>
//       <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 20 }}>
//         <Image
//           source={{
//             uri:
//               "https://yt3.ggpht.com/ytc/AAUvwnh0-9zdo6y5xc-z928zzHsqqqkXoPRAj3obuQK_Xg=s176-c-k-c0x00ffffff-no-rj",
//           }}
//           style={{ height: 100, width: 100, borderRadius: 50, marginRight: 14 }}
//         />
//         <View>
//           <Text style={{fontWeight: 'bold', fontSize: 20}}>Pecinta Ngudut</Text>
//           <Text>{subreker} jt subreker</Text>
//         </View>
//       </View>
//     </View>
//   ); 
// }

export default FlexBox