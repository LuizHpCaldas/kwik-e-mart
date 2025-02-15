import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

interface Item {
  nome: string;
  preco: string;
  pego: boolean;
}

const HomeScreen = () => {
  const [item, setItem] = useState(""); // Nome do item
  const [lista, setLista] = useState<Item[]>([]); // Lista de compras
  const [total, setTotal] = useState(0); // Total gasto

  // Adicionar item à lista
  const adicionarItem = () => {
    if (item.trim() !== "") {
      setLista([...lista, { nome: item, preco: "", pego: false }]);
      setItem(""); // Limpa o input após adicionar
    }
  };

  // Remover item da lista
  const removerItem = (index: number) => {
    const novoItem = lista[index];
    if (novoItem.pego && novoItem.preco) {
      setTotal(total - parseFloat(novoItem.preco)); // Atualiza o total ao remover
    }
    setLista(lista.filter((_, i) => i !== index));
  };

  // Marcar item como pego e definir o preço
  const definirPreco = (index: number, preco: string) => {
    const novaLista = [...lista];
    novaLista[index].preco = preco;
    novaLista[index].pego = preco !== ""; // Só marca como pego se tiver preço definido
    setLista(novaLista);

    // Atualizar total
    const novoTotal = novaLista.reduce(
      (acc, item) =>
        acc + (item.pego && item.preco ? parseFloat(item.preco) : 0),
      0
    );
    setTotal(novoTotal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      {/* Input para adicionar item */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do item"
        value={item}
        onChangeText={setItem}
      />

      {/* Botão para adicionar item */}
      <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </TouchableOpacity>

      {/* Lista de itens */}
      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.item, item.pego && styles.itemPego]}>
            <Text style={styles.itemTexto}>{item.nome}</Text>

            {/* Input para definir preço */}
            <TextInput
              style={styles.precoInput}
              placeholder="R$"
              keyboardType="numeric"
              value={item.preco}
              onChangeText={(preco) => definirPreco(index, preco)}
            />

            {/* Botão de remover */}
            <TouchableOpacity onPress={() => removerItem(index)}>
              <Text style={styles.remover}>✖</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Total da compra */}
      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
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
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  botao: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 5,
  },
  itemPego: {
    backgroundColor: "#d4edda", // Verde claro quando marcado como pego
  },
  itemTexto: {
    fontSize: 16,
  },
  precoInput: {
    width: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 5,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  remover: {
    color: "red",
    fontSize: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});

export default HomeScreen;
