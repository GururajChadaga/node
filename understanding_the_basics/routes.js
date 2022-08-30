const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  } else if (url === '/message' && method === 'POST') {
    // take chunks of data from response
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    // concat them once all the chunks are available and write to file
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const [_, messageValue] = parsedBody.split('=');
      fs.writeFile('message.txt', messageValue, (err) => {
        // redirect to home
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
};

// module.exports = requestHandler;
// module.exports = { handler: requestHandler };
exports.handler = requestHandler;
