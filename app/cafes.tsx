import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type Cafe = {
  id: string;
  name: string;
  address: string;
  rating: number;
};

const CAFES: Cafe[] = [
  { id: "1", name: "Prolog Coffee", address: "Kødbyen, København", rating: 4.6 },
  { id: "2", name: "Coffee Collective", address: "Nørrebro, København", rating: 4.5 },
  { id: "3", name: "La Cabra", address: "Aarhus C", rating: 4.7 },
];

export default function Cafes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caféer</Text>

      <FlatList
        data={CAFES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
          </View>
        )}
      />

      <Link href="/" asChild>
        <Pressable style={styles.backButton}>
          <Text style={styles.backText}>Tilbage</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  list: {
    gap: 12,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    marginBottom: 6,
  },
  rating: {
    fontSize: 14,
  },
  backButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  backText: {
    color: "#fff",
    fontSize: 16,
  },
});
``
