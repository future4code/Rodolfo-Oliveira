import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { countries } from "./data";
import { country } from "./types";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("O Servidor está funcionando.")
})

app.get('/countries/search', (req: Request, res: Response) => {
    let result: country[] = countries
    if (req.query.name) {
        result = result.filter(
            country => country.name.includes(req.query.name as string)
        )
    }
    if (req.query.capital) {
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
        )
    }
    if (req.query.capital) {
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )
    }
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Error 404, not found.")
    }
})


app.get('/countries', (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res.status(200).send(result)
})

app.get('/countries/:id', (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Error 404, not found.")
    }
})

