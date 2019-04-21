module.exports = function() {
  return `
    <!-- Inline global css -->
    <style>
      html, body {
        margin: 0px;
        padding: 0px;
      }
      * {
        box-sizing: border-box;
      }

      .sb-container {
        max-width: 1200px;
        margin: auto;
      }
      .sb-container:after {
        content: "";
        clear: both;
      }
    </style>
    <!-- Inline block css -->
    <style>
      .sb-block {
        width: 100%;
        padding: 6px;
      }
      .sb-block__placeholder {
        width: 100%;
        height: auto;
      }
      .sb-block__placeholder--grey-box {
        background-color: #dfdfdf;
      }
    </style>
  `
}