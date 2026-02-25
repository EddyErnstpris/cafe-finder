import { View, Text, StyleSheet, FlatList } from "react-native";

const CAFES = ["Prolog Coffee", "Coffee Collective", "La Cabra"];

export default function Cafes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cafés</Text>

      <FlatList
        data={CAFES}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item}</Text>
            <Text style={styles.cardMeta}>København • 0,8 km</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 48,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 16,
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  cardMeta: {
    fontSize: 14,
    color: "#666",
  },
});