module.exports = function merchantLayout(fragments, placeholder) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Merchant page</title>
    </head>

    <body>
      <div class="sb-merchant">
        Left
      </div>
      <div class="sb-merchant">
        Right
      </div>
    </body>
    </html>
  `;
}
