import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import {Card} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select/src';
const Formulario = ({}) => {
  const [tamanio, guardarTamanio] = useState(0);
  const [tipo, guardarTipo] = useState(0);
  const [pago, guardarPago] = useState('');
  const [cant, guardarCant] = useState('');
  const [total, guardarTotal] = useState(0);
  const [porc, guardarPorc] = useState('');
  const calcular = () => {
    let sub = 0;
    sub = (tamanio + tipo) * cant;
    let des = 0;
    if (pago === 'Credito') {
      guardarPorc('5%');
      des = (5 / 100) * sub;
    } else {
      guardarPorc('15%');
      des = (15 / 100) * sub;
    }
    sub = sub - des;
    guardarTotal(sub);
  };
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.form}>
        <Text style={styles.title}>StarBosco APP</Text>
        <Text style={styles.label}>Seleccione tamaño por café</Text>
        <RNPickerSelect
          onValueChange={value => guardarTamanio(value)}
          items={[
            {label: 'Short 8 onz', value: 1},
            {label: 'Tall 12 onz', value: 1.5},
            {label: 'Grande 16 onz', value: 2},
          ]}
        />
        <Text style={styles.label}>Seleccione tipo de café</Text>
        <RNPickerSelect
          onValueChange={value => guardarTipo(value)}
          items={[
            {label: 'Mocha', value: 2},
            {label: 'Te chai', value: 2.5},
            {label: 'Americano', value: 1.5},
            {label: 'Frapper', value: 3},
          ]}
        />
        <Text style={styles.label}>Tipo de pago</Text>
        <RNPickerSelect
          onValueChange={value => guardarPago(value)}
          items={[
            {label: 'Efectivo', value: 'Efectivo'},
            {label: 'Credito', value: 'Credito'},
          ]}
        />
        <Text style={styles.label}>Cantidad</Text>
        <TextInput
          style={styles.input}
          onChangeText={texto => guardarCant(texto)}
          keyboardType="numeric"
        />
      </Card>
      <View style={{alignItems: 'center'}}>
        <View>
          <Text style={styles.title}>RESUMEN</Text>
          <Text>Cantidad solicitada:     {cant}</Text>
          <Text>Tamaño:                        ${tamanio.toFixed(2)}</Text>
          <Text>Tipo Cafe:                     ${tipo.toFixed(2)}</Text>
          <Text>Tipo de Pago:               {pago}</Text>
          <Text>Descuento:                   {porc}</Text>
          <Text style={styles.cal}>Total a Pagar:              ${total.toFixed(2)}</Text>
        </View>
      </View>
      <Button title="CALCULAR" onPress={() => calcular()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7DAED6',
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    backgroundColor: '#3F80A6',
    marginBottom: '10%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '5%',
  },
  cal: {
    marginBottom: '10%',
  },
});
export default Formulario;
