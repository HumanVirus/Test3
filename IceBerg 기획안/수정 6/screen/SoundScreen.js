import * as React from 'react';
import { Text, View, StyleSheet, FlatList, CheckBox} from 'react-native';
import { Checkbox, Card} from 'react-native-paper';
import Constants from 'expo-constants';

const data = [
    { id: 1, txt: '배경음', isChecked: false },
    { id: 2, txt: '타자소리', isChecked: false },
    { id: 3, txt: '진동', isChecked: false },
];

const SoundManager = (props) => {
    const [products, setProducts] = React.useState(data);
    const handleChange = (id) => {
        let temp = products.map((product) => {
          if (id === product.id) {
            return { ...product, isChecked: !product.isChecked };
          }
          return product;
        });
        setProducts(temp);
    };
    let selected = products.filter((product) => product.isChecked);
        const renderFlatList = (renderData) => {
            return (
					<FlatList
						data={renderData}
						renderItem={({ item }) => (
						<Card style={{ margin: 5 }}>
							<View style={styles.card}>
							<View
								style={{
								flexDirection: 'row',
								flex: 1,
								justifyContent: 'space-between',
								}}>
								<CheckBox
								value={item.isChecked}
								onChange={() => {
									handleChange(item.id);
								}}
								/>
								<Text>{item.txt}</Text>
							</View>
							</View>
						</Card>
						)}
					/>
            );
        };
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>{renderFlatList(products)}</View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
  
    card: {
      padding: 10,
      margin: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 5,
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 5,
    },
    text: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

export default SoundManager;