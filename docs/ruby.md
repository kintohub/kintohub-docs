---
title: Ruby
---

We are supporting Ruby 2.5

See [https://github.com/kintohub/ruby-examples](https://github.com/kintohub/ruby-examples) for a fully working example

Dockerfile:
```dockerfile
FROM ruby:2.5

RUN mkdir -p app

WORKDIR /app

COPY . /app

RUN gem install bundler
RUN bundle install
RUN bundle package --all

ENV PORT=80

EXPOSE 80

ENTRYPOINT ["bundle", "exec", "ruby", "app.rb"]
```

- You can modify the `Dockerfile` or `ENTRYPOINT` but it has to expose your app on port 80 and use the `/app` folder  
- We are using `bundler` as dependency manager hence you will need a `Gemfile` in your repository to enable external packages

Example Gemfile:
```gemfile
source 'https://rubygems.org'
gem 'sinatra'
gem "json", "~> 2.1"
```


