import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const createApp = (): express.Application => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(morgan("combined"));

    // Authentication Middleware (if needed)

    // API Routes

    // Error Handling Middleware
    app.use((err: Error, req: Request, res: Response, next: Function) => {
        console.error(err.stack);
        res.status(500).send("Whoa! Internal Error!?");
    });

    // Health Check Endpoint
    app.get('/ping', (req: Request, res: Response) => {
        res.json({message: "pong madafaka!"});
    });

    return app
}
export default createApp;

// // OOP

// import express, { Express, NextFunction, Request, Response } from 'express';
// import cors from 'cors';
// import morgan from 'morgan';

// class createApp {
//     private app: Express;

//     constructor() {
//         this.app = express();
//         this.setupMiddleware();
//         this.setupRoutes();
//         this.setupErrorHandling();
//         this.pingTest();
//     }

//     private setupMiddleware(): void {
//         this.app.use(cors());
//         this.app.use(express.json());
//         this.app.use(morgan('combined'));
//     }

//     private setupRoutes(): void {
//     }

//     private pingTest(): void {
//         this.app.get('/ping', (req: Request, res: Response) => {
//             res.json({ message: 'PONG! madafaka!' });
//         });
//     }

//     private setupErrorHandling(): void {
//         this.app.use(
//             (err: Error, req: Request, res: Response, next: NextFunction) => {
//                 console.error(err.stack);
//                 res.status(500).send('Whoa! An Internal Error!?')
//             }
//         );
//     }

//     public getApp(): Express {
//         return this.app;
//     }
// }

// export default createApp;