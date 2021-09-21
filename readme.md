# WebBlocks

![WebBlocks](https://github.com/zero-to-mastery/WebBlocks/blob/main/src/assets/img/facebook_cover_photo_2.png)

## TL;DR

#### [![](https://img.shields.io/badge/Html%20%26%20Javascript%20%26%20CSS%20PROJECT%20Powered%20by%20StencilJS-WebBlocks-00adb5?style=for-the-badge&logo=JavaScript)](https://github.com/r4pt0s/master_the_event_loop)

> There is a big hype about front-end frameworks all over the place. But what if we could build components without the need to reach out for big players like React,Vue and Angular?
>
> Turns out, this is a totally possible thing to do and it is quite easy using [StencilJs](https://stenciljs.com/docs/getting-started)
>
> Not only that we can build components which we can use in vanilla HTML, JS and CSS projects, but also creating components
> which we can also reuse with frameworks like React, Vue and Angular.
>
> So the goal of this project is to exactly showcase that

## How to contribute?

Contribution can happen in more possible ways:

1. Work on the `index.html` and/or the styles which are located in `src/global` for making the Website beautiful to look and work at
2. Create new web components
3. Add existing web components to the `index.html` file to show how they work (with code samples and by embedding them)
4. Invent new subpages for better structuring of web component usage under `src/pages` (don't forget to link the subpages in the index.html file)

## How to create a new web component the right way with StencilJs?

Fortunately, Stencil ships with a pre-configured command for that.
Just run

```
npm run generate
```

This will start a wizard where you can step-by-step configure your component (like the name, etc).

Finally, your new directory structure gets created under `src/components/component-name` where `component-name` is the name which you have choosen in the component creation wizard.

## I don't know typescript, do I have to use typescript in order to create new components?

Although it totally is recommended to use typescript for various reasons, it is not a must have to contribute.
If you are not familiar with typescript at all, just rename your files from

```
*.ts and *.tsx

to

*.js and *.jsx
```

This project makes use of `"checkJs": false` in the tsconig.json file which makes sure that nasty typescript errors do not fire up with common js and jsx files.

## Work on the project locally

In order to work and run the project locally you need NodeJs and npm installed on your system.
Perform the following steps:

```
 # HTTPS WAY
 git clone https://github.com/zero-to-mastery/WebBlocks.git

 # SSH WAY
 git clone git@github.com:zero-to-mastery/WebBlocks.git

 cd WebBlocks

 npm install
 npm start
```

# Git Workflow

## Fork first 🍴

We use the fork approach for collaboration. Fork the repository first and sync it with the original repository.

### Steps to keep the local version up-to-date 🔄

#### Inital setup 🛫

- Clone your forked version
  `git clone <UrlToTheForKedVersion>`

- Update the remote Url in order to sync your fork with the original repo

  `git remote add upstream https://github.com/zero-to-mastery/WebBlocks.git`

  or by using ssh

  `git remote add upstream git@github.com:zero-to-mastery/WebBlocks.git`

- Verify that all urls are in place
  `git remote -v`
  this should give you a output like this
  ```
    origin          https://github.com/username/WebBlocks.git (fetch)
    origin          https://github.com/username/WebBlocks.git (push)
    upstream        https://github.com/zero-to-mastery/WebBlocks.git (fetch)
    upstream        https://github.com/zero-to-mastery/WebBlocks.git (push)
  ```

#### Keep the local repository up-to-date & change into dev branch 🔄

Before starting to work on the files

- Get the latest version of the dev branch
  `git pull upstream dev`
- Get the latest version of the main branch
  `git pull upstream main`
- Make sure that you made your changes always in the dev branch.
- Check in which branch you currently are
  `git branch`
  Then you will see something like this:
  ```
  * dev
  main
  ```
- If you are not in the dev branch switch to the dev branch
  `git checkout dev`
- Start hacking 💻

#### Keep the remote repository (forked version) up-to-date 🔄

- Get the latest version of the dev branch
  `git pull upstream dev`
- Get the latest version of the main branch
  `git pull upstream main`
- Push the new files to your forked version
  `git push origin dev`

#### Creating PRs 🆕

In order to tell us which changes you want to make or what awesome new component you want to share with the world in our project, push your changes to your fork to the **dev branch** and create a pull request to the original repository.

This makes sure that we always have a working and stable main branch after we tested your changes.
If we made our tests and the **dev branch** is stable, we will merge the **dev branch** into the main branch without closing the **dev branch**.

In order to make a PR on Github, follow this steps:

- Add your files for staging with
  `git add .` for adding all files or
  `git add <path/to/filename>` for adding specific files
- Commit your changes
  `git commit -m "commit message"`
- Push your changes to the forked version
  `git push origin dev`
- Move over to your github page and click on "Make pull request"

## Where can I find the deployed version? 🤔

This project hosts a deployed version right here on Github.

On each merge into the main branch, the awesome Github Action [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) takes care of deploying the static files to the gh-pages branch.

## Goal 🏁

The goal of this project is, to the goal of this project is to showcase what we can do with web components and eventually to create a component library which we can host on npm.

## Who we are?

Our project team contains members from the [zero-to-mastery](https://zerotomastery.io) community.

#### Project Lead/Maintainer

> [![r4pt0s](https://avatars2.githubusercontent.com/u/29685827?s=200&v=4)](https://github.com/r4pt0s)

#### Team Members and Contributers

> Currently nobody 😱😱😱

This project was bootstrapped with [StencilJs](https://stenciljs.com/docs/getting-started).
