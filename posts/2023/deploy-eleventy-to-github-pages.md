---
title: Deploy Eleventy to GitHub Pages
date: 2023-11-09
author: Elisabeth
---

Follow 4 steps. Code examples in [these commits](https://github.com/elisabethirgens/tiny11ty/commits/) 💁🏻‍♀️

- Create a `.github/workflows/build-and-deploy.yml`
- Go to Settings > Pages > Build and deployment. Select **Source: GitHub Actions** <br>(This makes it possible to deploy to GitHub Pages directly from the repo, without using a Marketplace action or a separate gh-pages branch which was an earlier approach)
- Push a new edit (or to run workflow manually: find **Re-run jobs** under the Actions tab)
- Set `pathPrefix` in `eleventy.config.js` and for the build script in `package.json`
