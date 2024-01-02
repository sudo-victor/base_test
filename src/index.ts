import "dotenv/config";
import { DatabaseConnection } from "./configs/connection-config";
import { env } from "./configs/env-config";
import { app } from "./server";

DatabaseConnection.initialize();

app.listen(env.PORT, () => console.log("🌝 Server is running"));
