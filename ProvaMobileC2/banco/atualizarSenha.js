import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('senha.db');

export const atualizarSenha = (id, novaSenha) => {
  db.transaction(tx => {
    tx.executeSql('UPDATE senhas SET senha = ? WHERE id = ?', [novaSenha, id], (_, { rowsAffected }) => {
      if (rowsAffected > 0) {
        console.log('Senha atualizada com sucesso!');
      } else {
        console.log('Erro ao atualizar senha.');
      }
    });
  });
};
