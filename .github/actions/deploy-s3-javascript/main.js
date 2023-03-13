const core = require("@actions/core");
const github = require("@actions/github");

function run() {
  core.notice("Hello from js custom action!");
}

run();
