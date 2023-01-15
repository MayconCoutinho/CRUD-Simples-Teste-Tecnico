import { Request, Response } from "express"
import { ProductsBusiness } from "../business/ProductsBusiness"
import { BaseError } from "../errors/BaseError"

export class ProductsController {
    constructor(
        private productsBusiness: ProductsBusiness
    ) {}

    public getProductsController = async (req: Request, res: Response) => {
        try {
            const response = await this.productsBusiness.getProductsBusiness()
            res.status(200).send(response)
        } catch (error) {
			console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado no endpoint getProducts" })
        }
    }
}