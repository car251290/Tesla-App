import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import CarItems from '../CarItems';
import cars from './cars';
import styles from './styles';

const CarList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItems car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarList;
