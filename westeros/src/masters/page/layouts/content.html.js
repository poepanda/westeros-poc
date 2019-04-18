module.exports = function(fragments) {
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
        ${fragments.contentBlock}
      </div>
    </body>
    </html>
  `;
}