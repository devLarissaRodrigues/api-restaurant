import express from "express"

import { routes } from "./routes"
import { errorHangling } from "./middlewares/error-hangling"

const PORT = 3333
const app = express()
app.use(express.json())
app.use(routes)

app.use(errorHangling)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))