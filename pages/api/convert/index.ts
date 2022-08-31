// const docxConverter = require('docx-pdf');
// const express = require('express');
// const app = express();
// const upload = require('express-fileupload');
const fs = require('fs');
const path = require('path');

export default function handler(req: any, res: any) {
  const { method } = req;

  if (method === 'GET') {
    console.log(__dirname + '/');

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(JSON.stringify(['working']));
    res.end();
  }

  if (method === 'POST') {
    const file = req.body;
    let uploadPath;
    let fileName = file
      .split(';')
      .filter((arr: any) => arr.includes('filename'))[0];
    fileName = fileName.slice(
      fileName.indexOf('=') + 2,
      fileName.indexOf('.docx')
    );

    uploadPath = __dirname + '/upload';

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(
      JSON.stringify({
        data: fileName,
      })
    );
    res.end();
  }
}
