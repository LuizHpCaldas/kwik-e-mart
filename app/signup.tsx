import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-start",
            }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            style={{ flex: 1 }}
          >
            <Illustration source={require("../assets/images/signup.jpg")} />
            <FormContainer>
              <Title>Criar Conta</Title>
              <Subtitle>Preencha os dados abaixo para criar sua conta</Subtitle>

              <Label>Nome</Label>
              <Input placeholder="Nome" />

              <Label>Email</Label>
              <Input placeholder="Email" keyboardType="email-address" />

              <Label>Senha</Label>
              <Input placeholder="Senha" secureTextEntry />

              <Label>Confirmar Senha</Label>
              <Input placeholder="Confirmar Senha" secureTextEntry />

              <SignupButton onPress={() => router.push("/home")}>
                <ButtonText>Criar Conta</ButtonText>
              </SignupButton>

              <SocialLoginContainer>
                <SocialIcon source={require("../assets/icons/google.png")} />
                <SocialButtonText>Login com Google</SocialButtonText>
              </SocialLoginContainer>

              <LoginText>
                Já tem uma conta?{" "}
                <LoginLink onPress={() => router.push("/login")}>
                  <LoginTextBold>Entrar</LoginTextBold>
                </LoginLink>
              </LoginText>
            </FormContainer>
          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

const Illustration = styled.Image`
  width: 100%;
  height: 200px;
  resize-mode: contain;
  margin-bottom: 20px;
`;

const FormContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex: 1;
  padding: 20px 0;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
`;

const Label = styled.Text`
  font-size: 14px;
  color: gray;
  margin-bottom: 5px;
  align-self: flex-start;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #333;
`;

const SignupButton = styled.TouchableOpacity`
  background-color: #3b28cc;
  padding: 15px;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const SocialLoginContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SocialIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

const SocialButtonText = styled.Text`
  font-size: 14px;
  color: gray;
`;

const LoginText = styled.Text`
  font-size: 14px;
  color: gray;
`;

const LoginLink = styled.TouchableOpacity``;

const LoginTextBold = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #3b28cc;
`;
