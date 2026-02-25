import { View, Text, StyleSheet } from "react-native";

export default function CafesScreen() {
  const cafes = [
    { id: 1, name: "Prolog Coffee" },
    { id: 2, name: "Coffee Collective" },
    { id: 3, name: "La Cabra" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cafés</Text>

      {cafes.map((cafe) => (
        <Text key={cafe.id} style={styles.cafeItem}>
          {cafe.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cafeItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});