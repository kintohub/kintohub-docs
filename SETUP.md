# KintoHub Docs ([url](https://docs.kintohub.com))

## Setup

- `cd website`
- `npm install`
- `npm start`


To enable searching you have to set the following env variables:

```bash
# first specify the algolia key to run
export ALGOLIA_API_KEY=
export ALGOLIA_INDEX=
```

You need to either set it globally or temporary modify `npm start` to be like `ALOGLIA_INDEX=value npm start`

Once everything is done you should build and publish to github pages

```bash
# To build
npm run build

# Publish to github pages
npm run publish-gh-pages
```
