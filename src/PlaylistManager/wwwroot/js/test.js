var assert = require("assert");
var React = require("react");
var $ = require("jquery");
var TestUtils = require('react-addons-test-utils');
var ui = require("./ui.min.js");

function shallowRender(ui) {
    const renderer = TestUtils.createRendered();
    renderer.render(<Container />);
    return renderer.getRenderOutput();
}

describe('Show all user playlists', function () {
    
    it('should prove true equals true', function () {
        assert.equal(true, true);
    });
});