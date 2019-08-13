const app = erquire('./app.js').default,
      port = process.env.port || 3000;

app.listen(port);