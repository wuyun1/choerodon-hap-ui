const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('choerodon-hap-ui.css')
  .hasFile('choerodon-hap-ui.min.css')
  .hasFile('choerodon-hap-ui.js')
  .hasFile('choerodon-hap-ui.min.js')
  .hasFile('choerodon-hap-ui-pro.css')
  .hasFile('choerodon-hap-ui-pro.min.css')
  .hasFile('choerodon-hap-ui-pro.js')
  .hasFile('choerodon-hap-ui-pro.min.js');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
