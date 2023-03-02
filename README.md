# www

Link to live site: https://liquifi.vercel.app/

[Review ↗](https://dashboard.heroku.com/pipelines/f786454b-95a3-4d68-a32e-d314d9313083)

[Staging ↗](https://v-s-www.herokuapp.com)

[Production ↗](https://www.venture360.co)

## Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [VSCode](https://code.visualstudio.com/) + [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Git / GitHub

- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Workflow

When beginning any development, create a new branch from the `main` branch. We will NEVER work directly on `main`. No need to fear, the branch is protected with limited access.

#### Features

Please namespace all features as `feat/{{ FEATURE_NAME }}`. (e.g. a new feature branch for "search" should be named `feat/search`).

Create a pull request to begin tracking changes. When a feature is considered finished, add the label "ready for review" iss added. We will assign someone to review the code before the feature is merged into `main`. Try to keep pull requests small and focused on a single feature, otherwise we may need to split a branch into multiple pull requests. If the branch needs revisions, the reviewer will update the label to "needs revisions". Once revisions are made, update the label back to "ready for review". This process will continue until the branch in ready to merge.

#### Issues

Please namespace all issues as `issues/#{{ ISSUE_NUMBER }}` named according to the GitHub issue. (e.g. a new issue for "a registration error" should be created in GitHub first. Once an issue number is assigned, then the branch should be named `issues/#38`). Finally, take a brief screen recording as a GIF (some team members use https://cleanshot.com/) and upload the animated GIF in the issue description.

When an issue is considered fixed, create a pull request named "fix (or fixes) #38 – {{ brief description of what is fixed }}". Similar to features, be sure to add the label "ready for review". We will assign someone to review the code before the issue is confirmed as fixed and merged into `main`. Try to keep pull requests small and focused on a single feature, otherwise we may need to split a branch into multiple pull requests. If the branch needs revisions, the reviewer will update the label to "needs revisions". Once revisions are made, update the label back to "ready for review". This process will continue until the branch in ready to merge.

## Deployment

Each pull requests is automatically deployed as a review app for testing and feedback. Once merged into `main`, the review app is automatically removed.

The `main` branch is automatically deployed to a staging environment for final testing before being manually promoted to production by an admin.

## Resources

- [www – design](https://www.notion.so/www-Design-829d9db40a7a46b6aa423797fa04828d)
- [www – dev](https://www.notion.so/www-Dev-b3f87d7de0a54f8c8cd38baf61ab4146)
