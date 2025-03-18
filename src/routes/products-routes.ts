import { Router } from "express"
import { ProductControler } from "@/controllers/products-controller"

const productsRouter = Router()
const productsControler = new ProductControler()

productsRouter.get("/", productsControler.index)
productsRouter.post("/", productsControler.create)
productsRouter.put("/:id", productsControler.update)
productsRouter.delete("/:id", productsControler.remove)

export { productsRouter }