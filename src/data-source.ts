import "reflect-metadata"
import { DataSource } from "typeorm"
import { CategoryEntity } from "./entities/category"
import { ProductsEntity } from "./entities/products"
import { FormEntity } from "./entities/forma"
import { BlogEntity } from "./entities/blog"
import { UslugyEntity } from "./entities/uslugy"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "7hEfwjl*OVRL",
    database: "tour_b", 
    synchronize: true,
    logging: false,
    entities: [CategoryEntity , ProductsEntity , FormEntity , BlogEntity, UslugyEntity],
    migrations: [],
    subscribers: [],
})
