import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useRouter, RelativePathString } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  const listas = [
    { id: "1", nome: "Compras do Mês" },
    { id: "2", nome: "Churrasco do Fim de Semana" },
    { id: "3", nome: "Promoções do Mercado" },
  ];

  return (
    <Container>
      <Title>Suas Listas</Title>

      <FlatList
        data={listas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            onPress={() =>
              router.push(`/lista/${item.id}` as RelativePathString)
            }
          >
            <ListText>{item.nome}</ListText>
          </ListItem>
        )}
      />

      <NewListButton
        onPress={() => router.push("/nova-lista" as RelativePathString)}
      >
        <ButtonText>+ Criar Nova Lista</ButtonText>
      </NewListButton>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ListItem = styled.TouchableOpacity`
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ListText = styled.Text`
  font-size: 16px;
`;

const NewListButton = styled.TouchableOpacity`
  background-color: #3b28cc;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
