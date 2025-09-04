import { v4 } from "uuid"
import * as yup from "yup"

import User from "../models/User"

class UserController {
  async store(request, response) {
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(6).required(),
      admin: yup.boolean(),
    })

    try {
      schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.erros })
    }

    const { name, email, password, admin } = request.body

    const userExists = await User.findOne({
      where: {
        email,
      },
    })

    if (userExists) {
      return response.status(400).json({ error: "usuario existente" })
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
    })
    return response.status(201).json({
      id: user.id,
      name,
      email,
    })
  }
}

export default new UserController()
