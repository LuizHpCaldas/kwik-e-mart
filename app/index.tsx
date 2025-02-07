import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <Container>
      <Illustration source={require("../assets/images/login.jpg")} />
      <Title>Bem vindo!</Title>
      <Subtitle>Entre para continuar</Subtitle>

      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Senha" secureTextEntry />

      <LoginButton onPress={() => router.push("/home")}>
        <ButtonText>LOGIN</ButtonText>
      </LoginButton>

      <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>

      <SocialLoginContainer>
        <SocialIcon source={require("../assets/icons/google.png")} />
      </SocialLoginContainer>

      <SignupText>
        Ainda nao tem uma conta?{" "}
        <SignupLink onPress={() => router.push("/signup")}>
          <SignupTextBold>Sign up</SignupTextBold>
        </SignupLink>
      </SignupText>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
`;

const Illustration = styled.Image`
  width: 100%;
  height: 200px;
  resize-mode: contain;
  margin-bottom: 20px;
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

const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
  font-size: 16px;
`;

const LoginButton = styled.TouchableOpacity`
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

const ForgotPasswordText = styled.Text`
  color: gray;
  margin-bottom: 20px;
`;

const SocialLoginContainer = styled.View`
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

const SignupText = styled.Text`
  font-size: 14px;
  color: gray;
`;

const SignupLink = styled.TouchableOpacity``;

const SignupTextBold = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #3b28cc;
`;
