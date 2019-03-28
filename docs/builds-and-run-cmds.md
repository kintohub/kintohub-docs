---
title: Build & Run Commands
---


## Build Command

The Build commands of the selected programming language can work directly with KintoBlocks. When the command is run, the associated plugins and packages are added to the Kintoblock and as a result installed on the server.

>For example: In a **NodeJS** project, when the build command `npm install` is executed, the dependencies of `package.json` file are added to the KintoBlock.

{TODO: Raven add a screenshot of build log displaying action of npm install}

>Another example: In a **Python** project, running the build command `pip install -r requirements.txt` will add the related dependencies to Kintoblock and install them on the associated server.

## Run Command

Just like build commands, Run commands also can be used with Kintoblock. Here are some examples of how they work:

>In a **NodeJS** project, when the command `npm run prod` is executed, the KintoBlock initiates the necessary steps to start the service and keep it running on the associated server. 

{TODO: Raven add a screenshot of build log displaying action of npm run prod}

>In **Python** projects, by running the command `flask run --port 80 --host 0.0.0.0` the KintoBlock service can be initiated on the specified port server.

The events caused by the execution of build and run commands can be viewed in the logs page of the builds under **Sending build context to Docker daemon**.

