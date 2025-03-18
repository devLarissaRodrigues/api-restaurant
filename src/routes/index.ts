import { Router } from "express"

import { tablesSessionsRoutes } from "./tables-sessions-routes"
import { productsRouter } from "./products-routes"
import { tablesRouter } from "./tables-routes"

const routes = Router()
routes.use("/tables-sessions", tablesSessionsRoutes)
routes.use("/products", productsRouter)
routes.use("/tables", tablesRouter)

export { routes }