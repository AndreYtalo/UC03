import pkg from "pg";
const {Pool, Client} = pkg;

// Primeiro, tenta criar o banco de dados se não existir
const createDatabaseIfNotExists = async () => {
    const client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: 'postgres' // Conecta ao banco padrão do postgres
    });

    try {
        await client.connect();
        const result = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${process.env.DB_NAME}'`);
        if (result.rows.length === 0) {
            await client.query(`CREATE DATABASE ${process.env.DB_NAME}`);
            console.log(`✅ Banco de dados '${process.env.DB_NAME}' criado com sucesso!`);
        } else {
            console.log(`ℹ️ Banco de dados '${process.env.DB_NAME}' já existe.`);
        }
        await client.end();
    } catch (error) {
        console.error('❌ Erro ao verificar/criar banco de dados:', error.message);
        await client.end();
    }
};

// Cria o banco se não existir
await createDatabaseIfNotExists();

const db = new Pool(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    }
);

export default db;