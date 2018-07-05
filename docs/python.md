---
title: Python
---

We are supporting Python 3.6.4

See [https://github.com/kintohub/python-examples](https://github.com/kintohub/python-examples) for a fully working example

Dockerfile:
```dockerfile
FROM python:3.6.4

RUN mkdir -p app

WORKDIR /app

COPY . /app


RUN pip install -r requirements.txt

ENV FLASK_APP=hello.py

EXPOSE 80


ENTRYPOINT ["flask","run","--port", "80", "--host", "0.0.0.0"]
```

- You can modify the `ENTRYPOINT` line but you have to expose your app on port 80
- We are using `pip` for dependency management so you have to place a `requirements.txt` in your repository to allow pip to work

Example Requirements.txt:
```
Flask==0.12.2
MarkupSafe==1.0
Jinja2==2.10
click==6.7
itsdangerous==0.24
Werkzeug==0.14.1
```
