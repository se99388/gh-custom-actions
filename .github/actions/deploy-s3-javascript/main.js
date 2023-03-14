const core = require("@actions/core");
// const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  core.notice("Hello from js custom action!");

  //get input values
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  //upload files
  const s3Uri = `s3://${bucket}`;

  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`); //will authenticate with AWS_ACCESS_KEY_ID & AWS_SECRET_ACCESS_KEY
}

run();
