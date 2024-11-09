import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";

export default function AboutScreen({ route, navigation }) {
    const {name} = route.params;
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About {name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Hello")}>
                <Text style={styles.buttonText}>Go to Next Page</Text>
            </TouchableOpacity>
            <Button title="Update the name" onPress={() => navigation.setParams({name: "Ivan"})}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'purple',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
