import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";

interface Item {
  nome: string;
  preco: string;
  pego: boolean;
}

const ListaScreen = () => {
  const route = useRoute();
  const { nomeLista } = route.params as { nomeLista: string };

  const [item, setItem] = useState("");
  const [lista, setLista] = useState<Item[]>([]);
  const [total, setTotal] = useState(0);

  const adicionarItem = () => {
    if (item.trim() !== "") {
      setLista([...lista, { nome: item, preco: "", pego: false }]);
      setItem("");
    }
  };

  const removerItem = (index: number) => {
    const novoItem = lista[index];
    if (novoItem.pego && novoItem.preco) {
      setTotal(total - parseFloat(novoItem.preco));
    }
    setLista(lista.filter((_, i) => i !== index));
  };

  const definirPreco = (index: number, preco: string) => {
    const novaLista = [...lista];
    novaLista[index].preco = preco;
    novaLista[index].pego = preco !== "";
    setLista(novaLista);

    const novoTotal = novaLista.reduce(
      (acc, item) =>
        acc + (item.pego && item.preco ? parseFloat(item.preco) : 0),
      0
    );
    setTotal(novoTotal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{nomeLista}</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do item"
        value={item}
        onChangeText={setItem}
      />

      <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.item, item.pego && styles.itemPego]}>
            <Text style={styles.itemTexto}>{item.nome}</Text>

            <TextInput
              style={styles.precoInput}
              placeholder="R$"
              keyboardType="numeric"
              value={item.preco}
              onChangeText={(preco) => definirPreco(index, preco)}
            />

            <TouchableOpacity onPress={() => removerItem(index)}>
              <Text style={styles.remover}>✖</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  botaoTexto: { color: "#fff", fontWeight: "bold" },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 5,
  },
  itemPego: { backgroundColor: "#d4edda" },
  itemTexto: { fontSize: 16 },
  precoInput: {
    width: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 5,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  remover: { color: "red", fontSize: 20 },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});

export default ListaScreen;
