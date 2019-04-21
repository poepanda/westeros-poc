const getInlineStyles = function() {
  return `
    <!-- Inline layout css -->
    <style>
      .sb-merchant__left-container {
        width: 25%;
        float: left;
      }
      .sb-merchant__right-container {
        width: 75%;
        float: right;
      }
    </style>
  `
}

const getHtmlContent = function() {
  return `
    <div class="sb-merchant__left-container">
      <div class="sb-block">
        <div class="sb-block__placeholder sb-block__placeholder--grey-box" style="height: 200px"></div>
      </div>
      <div class="sb-block">
        <div class="sb-block__placeholder sb-block__placeholder--grey-box" style="height: 250px"></div>
      </div>
      <div class="sb-block">
        <div class="sb-block__placeholder sb-block__placeholder--grey-box" style="height: 100px"></div>
      </div>
      <div class="sb-block">
        <div class="sb-block__placeholder sb-block__placeholder--grey-box" style="height: 200px"></div>
      </div>
      <div class="sb-block">
        <div class="sb-block__placeholder sb-block__placeholder--grey-box" style="height: 400px"></div>
      </div>
    </div>
    <div class="sb-merchant__right-container">
      <div class="sb-block">
        <div class="sb-block__placeholder sb-block__placeholder--grey-box" style="height: 150px"></div>
      </div>
      <div class="sb-block">
        <div class="sb-block__placeholder sb-block__placeholder--grey-box" style="height: 800px"></div>
      </div>
      <div class="sb-block">
        <div class="sb-block__placeholder sb-block__placeholder--grey-box" style="height: 200px"></div>
      </div>
    </div>
  `
}
module.exports = {
  getHtmlContent,
  getInlineStyles,
}
