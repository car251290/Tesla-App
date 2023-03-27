import React from 'react'
import {StatusBar} from 'react-native'
import Header from './Components/Header';
 const App = () => {

    return (
        <>
        <View style={style.cotainer}>
        <Header />  
        <StatusBar style="auto" />
        </View>
        
        </>
    )


}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#ffff",
        alignItems:'center',
        justifyContent:'center'
    }
})
export default App;