const express = require('express');
const app = express();
app.use(express.json());

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
  res.json({ message: "Welcome from MAIN branch" });
});

app.use('/tasks', tasksRouter);

// Export app for testing
module.exports = app;

// Only start server if run directly (not in tests)
if (require.main === module) {
  app.listen(3000, () => console.log("API running on port 3000"));
}
