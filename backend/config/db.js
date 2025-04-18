import mysql from 'mysql2';

// Buat koneksi ke MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // ganti dengan username MySQL Anda
  password: '',  // ganti dengan password MySQL Anda
  database: 'tanaman',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

export default connection;
