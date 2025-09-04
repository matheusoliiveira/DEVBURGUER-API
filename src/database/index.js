import { Sequelize } from "sequelize"
import mongoose from "mongoose"

import configDatabase from "../config/database"

import User from "../app/models/User"
import Product from "../app/models/Product"
import Category from "../app/models/Category"

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    // Cria conexão com o banco SQL
    this.connection = new Sequelize(configDatabase)

    // Inicializa todos os models
    models.forEach((model) => model.init(this.connection))

    // Associa os models (se houver associações)
    models.forEach((model) => {
      if (typeof model.associate === "function") {
        model.associate(this.connection.models)
      }
    })
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb://localhost:27017/devburger",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
  }
}

export default new Database()
