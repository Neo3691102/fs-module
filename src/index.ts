//import http from "node:http";
import fs from "node:fs";


fs.readFile("./src/notes.json", (err, content) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(content);
  });

//const requestListener: http.RequestListener = (req, res) => {
  // completa tu código aquí
//};
 
//const server = http.createServer(requestListener);
//server.listen(5500);