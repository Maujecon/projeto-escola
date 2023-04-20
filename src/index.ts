import { config } from 'dotenv'
config();
import express from 'express'
import cors from 'cors'
import "reflect-metadata"
import { createConnection } from 'typeorm';
import "./controllers/SalasController"
import salaRouter from './routers/salas-router'

class App {

    public async configure(): Promise<void> {
        await createConnection();
        require("./dependencias");

        // Porta do servidor
        const PORT = process.env.PORT || 4000
        // Host do servidor
        const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
        // App Express
        const app = express()
        // JSON
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        // Endpoint raiz
        app.get('/', (req, res) => {
            res.send('Bem-vindo!')
        })
        // Cors
        app.use(cors({
            origin: ['http://localhost:3000']
        }))
        // Rotas
        // app.use('/api', alunosRouter)
        app.use('/api', salaRouter)

        // Resposta padrão para quaisquer outras requisições:
        app.use((req, res) => {
            res.status(404)
        })
        // Inicia o sevidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
        })
    }
}
const initializer = new App();

initializer.configure()
    .then(() => {
        console.log("Running ...");
    })
    .catch((error) => {
        console.log("Unexpected error", error);
        process.exit(1);
    });
