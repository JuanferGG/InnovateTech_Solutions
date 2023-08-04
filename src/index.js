import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRouters from "./routes/index.js"

const app = express()

const __dirName = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirName, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(join(__dirName, 'public')))
app.use(express.static(join(__dirName, 'public/img')))

app.use(indexRouters)

app.listen(3000)
console.log('port:', 3000)