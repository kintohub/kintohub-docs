# KintoHub Docs ([url](https://docs.kintohub.com))

## Setup

- `cd website`
- `npm install`
- `npm start`

To enable searching you have to set the following env variables at `web/.env` file

```bash
cd website

# copy from the sample file
cp .env-sample .env


# update the content inside .env file
ALGOLIA_INDEX=
ALGOLIA_API_KEY=
```

Once everything is done you should build and publish to github pages

```bash
# To build
npm run build

# Publish to github pages
npm run publish-gh-pages
```

## Algolia Docsearch

If the document has a main update (e.g. major path restructure),
we may need to update the algolia config on github.
After finish updating the config, make a PR and merge to algolia's repo.
These configs are publicly avaliable
[https://github.com/kintohub/docsearch-configs](https://github.com/kintohub/docsearch-configs)