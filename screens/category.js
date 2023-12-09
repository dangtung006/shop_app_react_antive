import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductItem from '../components/productItem';

export default function Category({ }) {
    const [products, setProducts] = useState([
        {
            id : 1,
            name: "Quan sip",
            price: "400k"
        },
        {
            id : 2,
            name: "Quan sip",
            price: "400k"
        },
        {
            id : 3,
            name: "Quan sip",
            price: "400k"
        },
        {
            name: "Quan sip",
            price: "400k"
        },
        {
            id : 4,
            name: "Quan sip",
            price: "400k"
        }
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ProductItem
                        category={item}
                    />)}
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {

    }
});
