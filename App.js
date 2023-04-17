import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Svg, {Image} from 'react-native-svg'

const App = () => {
    const {width, height} =  Dimensions.get('window');
    return (
        <View style={styles.container}>
            <Svg width={width} height={height}>
                <Image href={require('./src/assets/login-background.jpg')}/>
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default App