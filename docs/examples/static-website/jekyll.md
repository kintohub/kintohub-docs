---
title: Jekyll Example
sidebar_label: Jekyll
---
## Overview
Jekyll is a simple, extendable, static site generator. 

Its best to generate a static website and service on a CDN and custom hostname which can easily be done with KintoHub!

[Live Example](https://jekyll-example-1d0d2-8caf9.web.master.kintohub.com/)

## Deployment
1. Apply this template to your [Github](https://github.com/kintohub/jekyll-example/generate)
2. Connect your GithubApp to KintoHub.
3. Create a [Static Website from Build](https://docs.kintohub.com/docs/kintoblocks/websites) on KintoHub and select the Repository you just generated on your account.
4. Set the **name** of your kinto block
5. Choose `Ruby` as the **language** and `2.6.5` as the **version**
6. Set the **Build Command** as `gem install jekyll bundler && bundle install &&  bundle exec jekyll build`
7. Set the **Build Folder** as `_site`

You're now good to go! Click **Create Website** and then on your Master branch click **Build Latest Commit**.

Once complete, Click  Now click **Add To Project**.
And now you're ready to go live Click **Deploy** and once done -> you can view your website by clicking **Open**

## What's Next?

You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project.

* [Creating multiple environments](https://docs.kintohub.com/docs/projects/environments)

Happy coding!