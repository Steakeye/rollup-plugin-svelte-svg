const { svelteSVG } = require("../dist");

const svg = `<!-- This Source Code Form is subject to the terms of the Mozilla Public
- License, v. 2.0. If a copy of the MPL was not distributed with this
- file, You can obtain one at http://mozilla.org/MPL/2.0/. -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><circle fill="rgba(12, 12, 13, .8)" cx="8" cy="2" r="2"></circle><path fill="rgba(12, 12, 13, .8)" d="M14.1 4.5H2c-.6 0-1 .4-1 1s.4 1 1 1h3.5v8.4c0 .6.4 1.1 1 1.1s1-.5 1-1.1v-4.1h1v4.1c0 .6.4 1.1 1 1.1s1-.5 1-1.1V6.4H14c.6 0 1-.4 1-1s-.4-.9-.9-.9z"></path></svg>`;

const plugin = svelteSVG();

console.log(plugin.transform(svg, "award-hello.svg").code);
