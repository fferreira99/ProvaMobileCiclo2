import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { gerarSenha } from './banco/gerarSenha';
import { criarTabelaSenhas } from './banco/criarTabelaSenhas';
import { inserirSenha } from './banco/inserirSenha';
import { atualizarSenha } from './banco/atualizarSenha';
import { apagarSenha } from './banco/apagarSenha';

export default function App() {
  useEffect(() => {
    criarTabelaSenhas();
  }, []);

  const handleGerarSenha = () => {
    const novaSenha = gerarSenha();
    inserirSenha(novaSenha);
  };

  const handleAtualizarSenha = (id, novaSenha) => {
    atualizarSenha(id, novaSenha);
  };

  const handleApagarSenha = (id) => {
    apagarSenha(id);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sistema de gerenciamento de senhas</Text>
      <Button title="Gerar Senha" onPress={handleGerarSenha} />
      <Button title="Atualizar Senha" onPress={() => handleAtualizarSenha(1, gerarSenha())} />
      <Button title="Apagar Senha" onPress={() => handleApagarSenha(1)} />
    </View>
  );
}
