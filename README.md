# React Template

<!-- markdownlint-disable-next-line MD033 -->
<img width="400" alt="Logo" src="./public/logo-black.svg" />

We help digital health startups, clinics and other companies ideate, design, and develop custom web & mobile applications that transform the future of healthcare.

This is a React template repo for Light-it's frontend projects.

## Initiate development environment

1. Install [pnpm](https://pnpm.io/installation).
2. Run `pnpm i` to install dependencies.
3. Create .env file `cp .env.example .env` and fill with proper variables (ask team members).
4. Run `pnpm dev` to start development server.

## Techs

- [pnpm](https://pnpm.io/installation)
- [React 19](https://react.dev/)
  - Tools
    - [Eslint](https://eslint.org/docs/latest/)
    - [Prettier](https://prettier.io/docs/)
    - [Code Spell Checker](https://cspell.org/docs/getting-started)
    - Ide Helper (see [recommended extensions](#recommended-extensions))
- [React hook form](https://react-hook-form.com/)
- [Tailwind Variants](https://www.tailwind-variants.org/docs/introduction)
- [TailwindCSS 4](https://tailwindcss.com/)
- [Tanstack Router](https://tanstack.com/router/latest/docs/framework/react/overview)
- [Zod](https://zod.dev/)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [Git](https://git-scm.com/docs/git)
  - PR Template
  - Issue Template
  - Git Hooks with [Husky](https://typicode.github.io/husky/)

## Recommended Extensions

All of the vscode extensions that we recommend are inside the .vscode/extensions.json

### esbenp.prettier-vscode <!-- cspell: disable-line -->

Run prettier on your vscode so you can format the code on save and not have to worry ever again about indentation or import order or exactly where and when to break up a gigantic one liner

### dbaeumer.vscode-eslint <!-- cspell: disable-line -->

Run eslint & typescript on your vscode so you can easily and quickly find out about all of the wonderful mistakes you've just made as soon as you made them

### bradlc.vscode-tailwindcss <!-- cspell: disable-line -->

Wanna know what a tailwind class name does? with this wonderful extension you can hover over them and find out.

### streetsidesoftware.code-spell-checker

Tired of making mistakes because your english is not exactly perfect? Well boy oh howdy do I have the extension for ya! It's basically eslint but for english.

### eliostruyf.vscode-typescript-exportallmodule <!-- cspell: disable-line -->

Ever had to create an index file with just a bunch of exports? Ever wondered why don't we automate all of that? Well wonder no more! With this barrel file generator you can generate your barrel files automatically.

## Emoji Guide

**For reviewers: Emojis can be added to comments to call out blocking versus non-blocking feedback.**

E.g: Praise, minor suggestions, or clarifying questions that don’t block merging the PR.

> 🟢 Nice refactor!

<!-- markdownlint-disable-line MD028 -->

> 🟡 Why was the default value removed?

E.g: Blocking feedback must be addressed before merging.

> 🔴 This change will break something important

|              |                |                                     |
| ------------ | -------------- | ----------------------------------- |
| Blocking     | 🔴 ❌ 🚨       | RED                                 |
| Non-blocking | 🟡 💡 🤔 💭    | Yellow, thinking, etc               |
| Praise       | 🟢 💚 😍 👍 🙌 | Green, hearts, positive emojis, etc |

## Links

- [Git Flow](https://lightit.slite.com/app/docs/SC8usN2Ju)
- [Handbook of good practices for reviewers in Code Reviews](https://lightit.slite.com/app/docs/ddNGohWthVB3fO)
