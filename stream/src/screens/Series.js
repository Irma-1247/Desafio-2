import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const comedias = [
  {
    id: '1',
    title: 'How I met your mother',
    src: require('../img/series/mother.jpg'),
    temp: '9 temporadas',
    iden: 'BxJ9wBuQUFI',
  },
  {
    id: '2',
    title: 'Cobra Kai',
    src: require('../img/series/cobra.jpg'),
    temp: '5 temporadas',
    iden: 'PatIeEN93Wc',
  },
  {
    id: '3',
    title: 'The Owl House',
    src: require('../img/series/toh.jpg'),
    temp: '2 temporadas',
    iden: '1W1FFiT51lg',
  },
];

const aventura = [
  {
    id: '1',
    title: 'WandaVision',
    src: require('../img/series/wanda.jpg'),
    temp: '1 temporada',
    iden: 'R2oA59hYN_Y',
  },
  {
    id: '2',
    title: 'Star Wars : Andor',
    src: require('../img/series/andor.jpg'),
    temp: '1 temporada',
    iden: 'qE3PcSe7GX0',
  },
  {
    id: '3',
    title: 'The Witcher',
    src: require('../img/series/witcher.jpg'),
    temp: '2 temporadas',
    iden: 'ETY44yszyNc',
  },
];

const fantasia = [
  {
    id: '1',
    title: 'Once Upon A Time',
    src: require('../img/series/once.jpg'),
    temp: '7 temporadas',
    iden: 'L52woeVxxeU',
  },
  {
    id: '2',
    title: 'Destino: La saga Winx',
    src: require('../img/series/winx.jpg'),
    temp: '2 temporadas',
    iden: 'L2kkAOjLNWA',
  },
  {
    id: '3',
    title: 'The Originals',
    src: require('../img/series/original.jpg'),
    temp: '5 temporadas',
    iden: 'GXrDYboUnnw',
  },
];

const Series = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [iden, setIden] = useState('');
  const [titu, setTitu] = useState('');
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  const Item = ({title, img, temp, iden2}) => (
    <>
      <View style={styles.item}>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisible(!modalVisible);
              setIden(iden2);
              setTitu(title);
            }}>
            <Image style={styles.img} source={img} />
          </TouchableHighlight>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text>{temp}</Text>
        </View>
      </View>
    </>
  );
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      img={item.src}
      temp={item.temp}
      iden2={item.iden}
    />
  );
  return (
    <ScrollView style={styles.area}>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <View>
              <Text style={styles.subtitulo}>Trailer</Text>
              <Text style={styles.titu}>{titu}</Text>
              <YoutubePlayer
                height={155}
                play={playing}
                videoId={iden}
                onChangeState={onStateChange}
              />
              <Button
                color="#241126"
                title={playing ? 'pause' : 'play'}
                onPress={togglePlaying}
              />
            </View>
            <Text style={{marginBottom: '20%'}} />
            <Button
              title="Cerrar"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.contain}>
        <Image style={styles.banner} source={require('../img/series/tv.jpg')} />
      </View>
      <Text style={styles.label}>Comedia</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={comedias}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <Text style={styles.label}>Aventura</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={aventura}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <Text style={styles.label}>Fantasía</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={fantasia}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  area: {
    flex: 1,
    padding: '2%',
    backgroundColor: '#D9CCC5',
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  img: {
    width: 100,
    height: 150,
    margin: 8,
    resizeMode: 'contain',
  },
  title: {
    paddingTop: '3%',
    fontSize: 16,
    color: 'black',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  contain: {
    flexDirection: 'row',
  },
  banner: {
    height: 250,
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    margin: '5%',
    padding: '7%',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#D9CCC5',
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    color: 'black',
  },
  titu: {
    color: 'black',
    fontSize: 18,
    marginTop: '2%',
    marginBottom: '2%',
  },
});
export default Series;
