import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoryItem({ category, onPress }) {

    return (
        <TouchableOpacity 
            activeOpacity={0.75}
            onPress={onPress}
        >
            <View style={styles.categoryContainer}>

                <Text style={styles.categoryText}>{category.name}</Text>

                <Image
                    resizeMode="contain"
                    style={styles.categoryImg}
                    source={{ uri: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/imgTag.png" }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 4,
        marginBottom: 16,

        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },

    categoryText: {
        marginTop: 8,
        marginBottom: 8,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 20
    },

    categoryImg: {
        width: 50,
        height: 50,
        borderWidth: 1
    }
});
