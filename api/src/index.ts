import app from "./app";
import habitsRoutes from "./routes/habits.routes";

app.use("/api", habitsRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
