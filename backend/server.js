import app from "./app.js";
import cors from "cors";

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
