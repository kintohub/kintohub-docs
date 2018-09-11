# KintoHub Docs ([url](https://docs.kintohub.com))

## Setup

- `cd website`
- `npm install`
- `npm start`


To enable searching you have to set the following env variables:

```
ALGOLIA_API_KEY
ALGOLIA_INDEX
```

You need to either set it globally or temporary modify `npm start` to be like `ALOGLIA_INDEX=value npm start`
