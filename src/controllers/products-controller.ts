import { NextFunction, Request, Response } from "express"
import { AppError } from "@/utils/AppError"

class ProductControler {
    async index(request: Request, response: Response, next: NextFunction){
        try{
            return response.json({message: "Ok"})
        }   catch (error){
            next(error)
        }
    }
}

export { ProductControler }