import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const proxis = [
  {
    id: '1',
    iden: 'OW8yGqdzjdo',
    title: 'The Owl House - Serie',
    desc: 'Temporada final, 3 caps de 1 hr',
    fecha: '15 de octubre de 2022',
  },
  {
    id: '2',
    iden: 'kiXQUNtv5CY',
    title: 'The Witcher: El origen de la sangre - Serie',
    desc: 'Serie ambientada 1200 años antes de los sucesos de «The Witcher»',
    fecha: '2022',
  },
  {
    id: '3',
    iden: 'jYRtFFa4hT8',
    title: 'Avatar 2 - Película',
    desc: "Jake Sully y Ney'tiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece.",
    fecha: '16 de diciembre de 2022',
  },
];
const Proxs = ({}) => {
  const Item = ({iden, title, desc, date}) => (
    <>
      <View style={styles.boton}>
        <YoutubePlayer
          height={200}
          play={playing}
          videoId={iden}
          onChangeState={onStateChange}
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Button
          color="#241126"
          title={playing ? 'pause' : 'play'}
          onPress={togglePlaying}
        />
      </View>
    </>
  );
  const renderItem = ({item}) => (
    <Item
      iden={item.iden}
      title={item.title}
      desc={item.desc}
      temp={item.temp}
      date={item.fecha}
    />
  );
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  return (
    <>
      <View>
        <SafeAreaView>
          <FlatList
            data={proxis}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  desc: {
    fontSize: 17,
  },
  date: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  boton: {
    paddingBottom: '2%',
    backgroundColor: '#D9CCC5',
  },
});
export default Proxs;
