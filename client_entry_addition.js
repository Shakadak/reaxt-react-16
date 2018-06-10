const React = require("react")
const ReactDOM = require("react-dom")

function default_client_render(props, render, param){
  render(React.createElement(this, props))
}

window.reaxt_render = function(module, submodule, props, param) {
  module = require("./../../src/" + module)
  submodule = (submodule ? module[submodule] : module)
  submodule.reaxt_client_render = submodule.reaxt_client_render || default_client_render
  return function(elemid){ 
    submodule.reaxt_client_render(props, function(comp) {
      ReactDOM.render(comp, document.getElementById(elemid))
    }, param)
  }
}
