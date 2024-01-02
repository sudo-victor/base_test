import { connect, connection } from "mongoose"
import { env } from "./env-config"

export class DatabaseConnection {
  static async initialize() {
    connection.on("open", () => {
      console.log("🌚 Database connected!")
    })

    await connect(env.DATABASE_URL)
  }
}
