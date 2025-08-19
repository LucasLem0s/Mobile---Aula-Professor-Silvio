import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList, Image} from 'react-native';


const DATA = [
  {
    id: '1',
    nome: 'Harry Potter',
    casa: 'Casa: Grifinoria',
    imagem: require('./assets/harry.png'),
  },
  {
    id: '2',
    nome: 'Hermione Granger',
    imagem: require('./assets/hermione.png'),
  },
  {
    id: '3',
    nome: 'Ron Weasley',
    imagem: require('./assets/ron.png'),
  },
  {
    id: '4',
    nome: 'Alvo Dumbledore',
    imagem: require('./assets/alvo.png'),
  },  
  {
    id:'5',
    nome: 'Hagrid',
    imagem: require('./assets/hagrid.png'), 

  }
];  

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.imagem} style={styles.imagem} />
      <Text style={styles.texto}>{item.nome}</Text>
      <Text style={styles.texto}>{item.casa}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Personagens de Harry Potter</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#523909',
  },
  titulo: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  item: {
    backgroundColor: '#d09116',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    borderRadius: 10, 
    color: 'white',
  },
  texto: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  imagem: {
    width: 120,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

