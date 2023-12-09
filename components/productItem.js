import React from "react";
import {View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProductItem = ({ product })=>{
    return(
        <View style={styles.shadow}>
            <View style={styles.container}>
                {/* <Image /> */}
                <View style={styles.content}>
                    <Text>Snowboard</Text>
                    <View style={styles.productPriceRow}>
                        <Text style={styles.productPriceNum}>500K</Text>
                        <TouchableOpacity>
                            <Text>Mua</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    shadow : {

    },
    
    container : {

    },

    productImg : {

    },

    productContent : {

    },

    productPriceRow : {

    },

    productPriceNum : {

    },

    productPriceBtn : {
        
    }

});

export default ProductItem;

