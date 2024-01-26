import createApp from './app';
import dotenv from 'dotenv'

dotenv.config();

const start = async (): Promise<void> => {
    const app = createApp();
    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
      console.log(`API Gateway running on port ${PORT}`);
    });
};

start();

// // OOP

// import { Server } from 'http'
// import createApp from './app';
// import dotenv from 'dotenv';

// dotenv.config();

// class ServerApp {
//     private app    : createApp;
//     private server : Server;
//     private port   : number;

//     constructor() {
//         this.app = new createApp();
//         this.port = parseInt(process.env.PORT || '8000');
//         this.server = new Server(this.app.getApp());
//     }

//     public start(): void {
//         this.server.listen(this.port, () => {
//             console.log(`Server running on port ${this.port}`);
//         });
//     }
// }

// const serverApp = new ServerApp();
// serverApp.start();