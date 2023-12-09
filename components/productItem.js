import React from "react";
import {View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProductItem = ({ product })=>{
    return(
        <View style={styles.shadow}>
            <View style={styles.container}>
                {/* <Image style={styles.productImg} /> */}
                <View style={styles.productContent}>
                    <Text style={styles.productName}>Snowboard</Text>
                    <View style={styles.productPriceRow}>
                        <Text style={styles.productPriceNum}>500K</Text>
                        <TouchableOpacity>
                            <Text style={styles.productPriceBtn}>Mua</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    shadow : {
        shadowColor : "#000",
        shadowOpacity : 0.1,
        shadowRadius : 10,
        shadowOffset : { width : 0, height : 0 },


        flex : 1,
        paddingTop : 8,
        paddingHorizontal : 8
    },
    
    container : {
        backgroundColor : "#fff",
        overflow: "hidden",
        borderRadius : 4,
        marginBottom : 20
    },

    productImg : {
        height : 150,
        borderRadius : 4
    },

    productName : {
        fontSize : 16,
        marginBottom : 8
    },

    productContent : {
        padding : 8
    },

    productPriceRow : {
        flexDirection : "row",
        alignItems : "center"
    },

    productPriceNum : {
        flex : 1,
        fontSize : 16,
        color : "#888"
    },

    productPriceBtn : {
        textTransform : 'uppercase',
        fontSize : 16,
        color : "#2f95dc"

    }

});

export default ProductItem;

