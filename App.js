import { Text, SafeAreaView, StyleSheet, Image, View, Button} from 'react-native';
import React, {useState} from 'react';
// You can import supported modules from npm

// or any files within the Snack


export default function Portopolio() {
  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);

  const Handleslike = () => {setLikes (Likes +1);};
  const Handlesdislike = () => {setDislikes (Dislikes +1);};


  return(
    <SafeAreaView style={styles.container}>
    <Image source={require('./assets/wanwan.jpg')}
    style={{width: 35, height: 35, borderRadius: 100, marginTop: 20, 
    marginRight: 20, alignSelf: 'flex-end'}}
    />
    <Text style={styles.txthello}>Halo.. !</Text>
    <Text style={styles.text1}>Nama saya Wildan Shouma Arrayyan</Text>
    <Text style={styles.text2}>Anda berada tampilan di Portopolio saya. Anda juga bisa menilai porto saya di bagian bawah halaman ini.</Text>
    <View style={{ height: 20, width: 120, marginLeft: 20}}>
    <Button title="Tentang saya" color="#AF69EF" />
    </View>
    <Text style={styles.txtjudul}>Portopolio lain</Text>
    <Image source={require('./assets/58.png')}
    style={{width: 250, height: 150, alignSelf:'center', marginTop: 20, 
    borderRadius: 10}}
    />
    <Text style={styles.txtdefault}>Desain UI App YukSehat</Text>
    <View style={{ height: 20, width: 200, alignSelf: 'center',
    marginBottom: 50}}>
    <Button title="Lihat Selengkapnya" color="#AF69EF" />
    </View>
    <Image source={require('./assets/46.png')}
    style={{width: 250, height: 150, alignSelf:'center', marginTop: 20, 
    borderRadius: 10}}
    />
    <Text style={styles.txtdefault}>UI/UX App Scat</Text>
    <View style={{ height: 20, width: 200, alignSelf: 'center',
    marginBottom: 50}}>
    <Button title="Lihat Selengkapnya" color="#AF69EF" />
    </View>
    <Image source={require('./assets/90.png')}
    style={{width: 250, height: 150, alignSelf:'center', marginTop: 20, 
    borderRadius: 10}}
    />
    <Text style={styles.txtdefault}>Desain Tampilan Website Wordpress</Text>
    <View style={{ height: 20, width: 200, alignSelf: 'center',
    marginBottom: 50}}>
    <Button title="Lihat Selengkapnya" color="#AF69EF" />
    </View>
    <Image source={require('./assets/kawankelam.png')}
    style={{width: 100, height: 120, alignSelf:'center', marginTop: 20}}
    />
    <Text style={styles.txtdefault}>Berikan Saya Nilai...😍</Text>
    <View style={{ height: 20, marginTop: 10, width: 75, marginLeft: 50}}>
    <Button onPress={Handleslike} title="Like" color="#74C365" />
    </View>
    <View style={{ height: 20, marginTop: -20, width: 75, marginRight: 50,
    alignSelf:'flex-end', marginBottom: 20}}>
    <Button onPress={Handlesdislike} title="Dislike" color="#E74C3C" />
    </View>
    <Text style={styles.txtlikes}> Jumlah Like: {Likes}</Text>
    <Text style={styles.txtdislikes}> Jumlah Disike: {Dislikes}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  txtlikes: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 45,
    marginTop: 10,
  },
  txtdislikes: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    marginBottom : 20,
    marginLeft: 45,
    marginRight:45,
    marginTop: -16,

    alignSelf:'flex-end',
  },
  txthello: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20
  },
  txtjudul: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 75,
  },
  text1: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20
  },
    text2: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    marginBottom : 25,
    marginLeft: 20,
    marginRight: 20
  },
    txtdefault: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    marginBottom : 20,
    textAlign: 'center',
    marginTop: 10,
    marginRight: 5
  },

});