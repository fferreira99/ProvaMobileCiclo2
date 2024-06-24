import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('senha.db');

export const criarTabelaSenhas = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS senhas (id INTEGER PRIMARY KEY AUTOINCREMENT, senha TEXT);'
    );
  });
};
