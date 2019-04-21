const globalFragments = require('./fragments');

module.exports = (layout, config) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      ${globalFragments.dnsPrefetch()}
      ${globalFragments.seoMeta()}
      ${globalFragments.inlineStyles()}

      ${layout.getInlineStyles()}
    </head>

    <body>
      <div class="sb-merchant sb-container">
        ${layout.getHtmlContent()}
      </div>
    </body>
    </html>
  `;
}