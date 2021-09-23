import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Story = (props) => {
    return (
      <View style={{alignItems: 'center', marginRight: 20}}>
        <Image
          source={{
            uri: props.gambar
          }}
          style={{ width: 70, height: 70, borderRadius: 70/2 }}
        />
        <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
      </View>
    );
}

const PropsDinamis = () => {
    return (
      <View>
        <ScrollView horizontal>
          <View style={{ flexDirection: "row" }}>
            <Story
              judul="Highlights 1"
              gambar="https://z-p4-instagram.fcgk3-1.fna.fbcdn.net/v/t51.2885-15/e15/c0.349.720.720a/s150x150/121289999_382134339814240_8620358990794799043_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=fHzWWl724ecAX_a8Od8&tn=Rp30yI-N9QcXsIeq&edm=AGW0Xe4BAAAA&ccb=7-4&oh=a928f7455579a5910e490469040eeb01&oe=6096E862&_nc_sid=acd11b"
            />
            <Story
              judul="Highlights 2"
              gambar="https://z-p4-instagram.fcgk3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.590.1080.1080a/s150x150/103963348_262785941492632_6989427513938685713_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=qXOEWcqHHvkAX9T6q-8&edm=AGW0Xe4BAAAA&ccb=7-4&oh=ea6ca04171280ead1d3aee7542f7d239&oe=6096DC8C&_nc_sid=acd11b"
            />
            <Story
              judul="Highlights 3"
              gambar="https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/e15/c0.392.720.720a/s150x150/121619680_210481983775291_5682750504450276359_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=eDV4NsYMrzYAX-KVZaZ&edm=AGW0Xe4BAAAA&ccb=7-4&oh=4b0041dec241f6a750ef636a108e8e0b&oe=6096F080&_nc_sid=acd11b"
            />
            <Story
              judul="Highlights 1"
              gambar="https://z-p4-instagram.fcgk3-1.fna.fbcdn.net/v/t51.2885-15/e15/c0.349.720.720a/s150x150/121289999_382134339814240_8620358990794799043_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=fHzWWl724ecAX_a8Od8&tn=Rp30yI-N9QcXsIeq&edm=AGW0Xe4BAAAA&ccb=7-4&oh=a928f7455579a5910e490469040eeb01&oe=6096E862&_nc_sid=acd11b"
            />
            <Story
              judul="Highlights 2"
              gambar="https://z-p4-instagram.fcgk3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.590.1080.1080a/s150x150/103963348_262785941492632_6989427513938685713_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=qXOEWcqHHvkAX9T6q-8&edm=AGW0Xe4BAAAA&ccb=7-4&oh=ea6ca04171280ead1d3aee7542f7d239&oe=6096DC8C&_nc_sid=acd11b"
            />
            <Story
              judul="Highlights 3"
              gambar="https://z-p4-instagram.fcgk3-2.fna.fbcdn.net/v/t51.2885-15/e15/c0.392.720.720a/s150x150/121619680_210481983775291_5682750504450276359_n.jpg?tp=1&_nc_ht=z-p4-instagram.fcgk3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=eDV4NsYMrzYAX-KVZaZ&edm=AGW0Xe4BAAAA&ccb=7-4&oh=4b0041dec241f6a750ef636a108e8e0b&oe=6096F080&_nc_sid=acd11b"
            />
          </View>
        </ScrollView>
      </View>
    );
}

export default PropsDinamis;

const styles = StyleSheet.create({})
