const libPattern = /^choerodon-hap-ui$/;
const libProPattern = /^choerodon-hap-ui\/pro$/;

function rewriteSource(t, path, libDir) {
  if (libDir === 'dist') {
    if (path.node.source.value.match(libPattern)) {
      path.node.source.value = '../../../dist/choerodon-hap-ui';
    } else if (path.node.source.value.match(libProPattern)) {
      path.node.source.value = '../../../dist/choerodon-hap-ui-pro';
    }
  }
}

module.exports = rewriteSource;
