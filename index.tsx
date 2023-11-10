const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response('👋 Hola Churrita! acá empieza un nuevo proyecto!');
  },
});

console.log(`Listening on localhost:${server.port}`);
