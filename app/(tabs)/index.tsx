import { View,StyleSheet,Text} from 'react-native'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color:'white',backgroundColor:'red'}}>Pradeep started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  justifyContent:'center'
 }
});
