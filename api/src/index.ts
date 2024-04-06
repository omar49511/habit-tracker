import { createApp } from "./app";
import habitsRoutes from "./routes/habits.routes";
const cors = require("cors");

const app = createApp();

app.use(cors());

app.use("/api", habitsRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
