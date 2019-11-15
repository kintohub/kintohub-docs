---
title: E2E test job example with puppeteer and Jest
sidebar_label: Puppeteer
---

## Overview
Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.
Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works ... Jest aims to work out of the box, config free, on most JavaScript projects.

So together they both make a nice full suite for testing and this simple example shows exactly that.
And often you want to have something to run your e2e tests before or after your cloud deployment and that's exactly what [KintoHub Jobs](https://docs.kintohub.com/docs/kintoblocks/jobs) are for.

## Requirements

- Make sure you set 256mb minimum for this job to run -> required to start chrome
*described in steps bellow

## Deployment
1. Apply this template to your [Github](https://github.com/kintohub/jest-puppeteer-job-example/generate)
2. Connect your GithubApp to KintoHub.
3. Create a [JOB](https://docs.kintohub.com/docs/kintoblocks/jobs) on KintoHub and select the Repository you just generated on your account.
4. Set the **name** for your job
5. Docker file is inclueded in the repo so you just press **Create Job***

Then on your Master branch click `Build Latest Commit`.

Once complete, Click  Now click `Add To Project`.

## Build & Deployment Configurations
1. Once added to a project -> open configuration side panel for your block by click a small gear icon on your block in dependencies list
2. Set **Memory Limit** to 256 MB
3. Press **Done Configuring**

And now you're ready to go live Click `Deploy` and once done -> go to **Logs** to see your job running.
*make sure you select **history** logs to monitor your job (since real-time logs only crab logs while pod is running which in case of a jon being killed immediately after script's execution)

For detailed explanation on how things work, checkout the [Jest](https://jestjs.io) and [puppeteer](https://github.com/GoogleChrome/puppeteer).


## What's Next?

You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project.

* [Creating multiple environments](https://docs.kintohub.com/docs/projects/environments)

Happy coding!