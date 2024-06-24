import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('senha.db');

export const inserirSenha = (senha) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO senhas (senha) VALUES (?)', [senha], (_, { rowsAffected }) => {
      if (rowsAffected > 0) {
        console.log('Senha inserida com sucesso!');
      } else {
        console.log('Erro ao inserir senha.');
      }
    });
  });
};
