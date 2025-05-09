import fastifyStatic from "@fastify/static";
import fastify from "fastify";
import path from "path";
import { fileURLToPath } from "url";

const server = fastify();

// Derive __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Register the fastify-static plugin
server.register(fastifyStatic, {
  root: path.join(__dirname, "."), // Replace 'public' with your directory name
  prefix: "/", // Optional: default is '/'
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
