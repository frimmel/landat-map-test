var Base = function (config) {
    ParseConfig(config, callback);
}

var callback = function (data) {
    renderLayerList(data.layers)
}

window.Base = Base;

export default {Base};
