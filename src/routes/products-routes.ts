import { Router } from "express"
import { ProductControler } from "@/controllers/products-controller"

const productsRouter = Router()
const productsControler = new ProductControler()

productsRouter.get("/", productsControler.index)

export { productsRouter }