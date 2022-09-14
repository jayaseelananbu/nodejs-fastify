const fastify = require("fastify")({ logger: true });
const PORT = 5000;

fastify.register(require("./routes/items"));

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
