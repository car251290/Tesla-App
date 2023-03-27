import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Button from './Button'
import styles from './CarItemStyles';

const CarItems = (props)=> {
    const { name, tagline, taglineCTA, image } = props.car;

    return (

        <View style={style.carContainer}>
            <ImageBackground 
            source={image}
            style={styles.image}>
            </ImageBackground>
            <View style={style.title}>
                <Text style={style.title}>{name}</Text>
                <Text style={style.subtitle}>{tagline} {''}</Text>
                <Text style ={style.subtitleCTA}>{taglineCTA}</Text>
            </View>
            <View style={style.buttonContainer}>
                <Button
                type="primary"
                contain={"Custom Order"}
                onPress={()=> {

                }}
                />
                <Button
                type="secondary"
                content = {"existing inventory"}
                onPress= {()=> {}}
                />
            </View>
        </View>
       
    )

}

export default CarItems;
