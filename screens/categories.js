import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryItem from './../components/categoryItem';
import { useState } from 'react';

export default function Categories({ navigation  }) {
    const [categories, setCategories] = useState([
        { id: 1, name: "Dung cu truot tuyet" },
        { id: 2, name: "Dung cu truot tuyet" },
        { id: 3, name: "Dung cu truot tuyet" },
        { id: 4, name: "Dung cu truot tuyet" },
        { id: 5, name: "Dung cu truot tuyet" },
        { id: 6, name: "Dung cu truot tuyet" }
    ])

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <CategoryItem 
                        category={item} 
                        onPress={()=>navigation.navigate("Category")} 
                    />)}
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#e7feff',

        flex: 1,
        alignItems: "centger",
        justifyContent: "center"
    }
});
