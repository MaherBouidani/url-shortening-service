import pkg from 'pg';
import { parse } from 'url'; // Import the parse function from the 'url' module
// import dotenv from 'dotenv';
// dotenv.config();

const { Pool } = pkg;

// Parse the database URL to extract connection parameters
// const DATABASE_URL = process.env.DATABASE_URL;
// console.log(DATABASE_URL)
// const parsedUrl = parse(DATABASE_URL);

// console.log(parsedUrl)
const user_test = process.env.DB_USER;
console.log(user_test)


// Url {
//     protocol: 'postgresql:',
//     slashes: true,
//     auth: 'maherbouidani:1234',
//     host: 'localhost:5432',
//     port: '5432',
//     hostname: 'localhost',
//     hash: null,
//     search: null,
//     query: null,
//     pathname: '/URLShort',
//     path: '/URLShort',
//     href: 'postgresql://maherbouidani:1234@localhost:5432/URLShort'
//   }

const pool = new Pool({
  user: user_test, // Extract the username from the parsed URL
  host: process.env.DB_HOST, // Extract the hostname from the parsed URL
  database: process.env.DB_NAME, // Extract the database name from the parsed URL
  password: process.env.DB_PASSWORD, // Extract the password from the parsed URL
  port: process.env.DB_PORT, // Extract the port from the parsed URL
});

// Test the database connection
export default async function initilizationDatabase() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log(res, 'Successfully connected to the database.');
  } catch (error) {
    console.log("Pool:", pool)
    // console.log("The user:", process.env.DB_USER)
    console.error('Error connecting to the database:', error);
    throw error;
  }
}



// export default pool;
