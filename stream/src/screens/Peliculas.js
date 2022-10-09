import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  SafeAreaView,
  StatusBar,
  Button,
  TouchableHighlight,
  Alert,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const comedias = [
  {
    title: 'Legalmente rubia',
    src: require('../img/peliculas/blonde.jpg'),
    iden: 'vWOHwI_FgAo',
  },
  {
    title: 'Los Fockers',
    src: require('../img/peliculas/familia.jpg'),
    iden: 'ma53pywVZrg',
  },
  {
    title: 'Pitch Perfect',
    src: require('../img/peliculas/notas.jpg'),
    iden: '8dItOM6eYXY',
  },
  {
    title: 'Turning red',
    src: require('../img/peliculas/red.jpeg'),
    iden: 'XdKzUbAiswE',
  },
  {
    title: 'Bee Movie',
    src: require('../img/peliculas/bee.jpg'),
    iden: 'FFGaS6MDknY',
  },
  {
    title: 'Going to America',
    src: require('../img/peliculas/america.jpg'),
    iden: 'KFroCRDXw5E',
  },
];
const romances = [
  {
    title: 'Encantada',
    src: require('../img/peliculas/encantada.jpg'),
    iden: 'ClN4b3pv1uU',
  },
  {
    title: 'Bella y la Bestia',
    src: require('../img/peliculas/bella.jpg'),
    iden: 'XpMjfUJ1lUc',
  },
  {
    title: 'Libro de la vida',
    src: require('../img/peliculas/libro.jpg'),
    iden: 'JvIvF8ST8CY',
  },
  {
    title: 'Me Before You',
    src: require('../img/peliculas/before.jpg'),
    iden: 'PQ0RIeH__hI',
  },
  {
    title: 'Purple Hearts',
    src: require('../img/peliculas/purple.jpg'),
    iden: 'WTLgg8oRSBE',
  },
  {
    title: 'Cenicienta',
    src: require('../img/peliculas/cenicienta.jpg'),
    iden: 'sL7tV4vFWtQ',
  },
];
const acciones = [
  {
    title: 'Thor: Love and Thunder',
    src: require('../img/peliculas/thor.jpeg'),
    iden: 'E5xC9i_1vvY',
  },
  {
    title: 'Avengers: End Game',
    src: require('../img/peliculas/endgame.jpg'),
    iden: 'znk2OICHbjY',
  },
  {
    title: 'Shang-Chi',
    src: require('../img/peliculas/shang.jpg'),
    iden: 'BD77EOU8N3o',
  },
  {
    title: 'Black Widow',
    src: require('../img/peliculas/black.jpg'),
    iden: 'gR3JFH_3LhY',
  },
  {
    title: 'Dr. Strange in the multiverse of madness',
    src: require('../img/peliculas/strange.jpg'),
    iden: 'KREBGtEeW9U',
  },
  {
    title: 'Eternals',
    src: require('../img/peliculas/eternals.jpg'),
    iden: 'v1EkoQV4g5c',
  },
];

const Peliculas = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [iden, setIden] = useState('');
  const [titu, setTitu] = useState('');
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
      <ScrollView style={styles.main}>
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
          <Image
            style={styles.banner}
            source={require('../img/peliculas/cine.jpg')}
          />
        </View>
        <View styles={styles.contenedor}>
          <Text style={styles.titulo}>Comedia</Text>
          <ScrollView horizontal>
            {comedias.map((u, i) => {
              return (
                <React.Fragment key={i}>
                  <View>
                    <TouchableHighlight
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        setIden(u.iden);
                        setTitu(u.title);
                      }}>
                      <Image style={styles.movie} source={u.src} />
                    </TouchableHighlight>
                  </View>
                </React.Fragment>
              );
            })}
          </ScrollView>
          <Text style={styles.titulo}>Romance</Text>
          <ScrollView horizontal>
            {romances.map((u, i) => {
              return (
                <React.Fragment key={i}>
                  <View>
                    <TouchableHighlight
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        setIden(u.iden);
                        setTitu(u.title);
                      }}>
                      <Image style={styles.movie} source={u.src} />
                    </TouchableHighlight>
                  </View>
                </React.Fragment>
              );
            })}
          </ScrollView>
          <Text style={styles.titulo}>Acción</Text>
          <ScrollView horizontal>
            {acciones.map((u, i) => {
              return (
                <React.Fragment key={i}>
                  <View>
                    <TouchableHighlight
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        setIden(u.iden);
                        setTitu(u.title);
                      }}>
                      <Image style={styles.movie} source={u.src} />
                    </TouchableHighlight>
                  </View>
                </React.Fragment>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#D9CCC5',
  },
  contain: {
    flexDirection: 'row',
  },
  banner: {
    height: 250,
    flex: 1,
    resizeMode: 'contain',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    color: 'black',
  },
  contenedor: {
    marginHorizontal: 10,
  },
  movie: {
    width: 150,
    height: 200,
    marginRight: 5,
    resizeMode: 'contain',
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
export default Peliculas;
