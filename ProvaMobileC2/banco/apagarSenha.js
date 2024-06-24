import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('senha.db');

export const apagarSenha = (id) => {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM senhas WHERE id = ?', [id], (_, { rowsAffected }) => {
      if (rowsAffected > 0) {
        console.log('Senha apagada com sucesso!');
      } else {
        console.log('Erro ao apagar senha.');
      }
    });
  });
};
