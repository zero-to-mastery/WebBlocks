# Contributing to WebBlocks

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## Before you contribute

Our aim is to **keep it simple** for the developers to contribute to this project. See the folder structure (with concise description)

## How to contribute?

Contribution can happen in more possible ways:

1. Work on the `index.html` and/or the styles which are located in `src/global` for making the Website beautiful to look and work at
2. Create new web components
3. Add existing web components to the `index.html` file to show how they work (with code samples and by embedding them)
4. Invent new subpages for better structuring of web component usage under `src/pages` (don't forget to link the subpages in the index.html file)
5. Document your component:
   - Write doc comments for the component props (writing doc comments for other parts of your code is great, but won't be written to your `readme.md`).
   - Run `npm run build` to generate the readme file.
   - Add a usage example to your `readme.md` (above the `<!-- Auto Generated Below -->` comment) and any other information you may find useful.

## Request new Web Components using Github's [issues](../../issues)

In order to keep track of what components should get added or what new fancy component you want to add to our project, you have to start with an issue first.
It makes it easier for us to keep track of what's currently under development and we can assign commits and assign issues to specific github users.

This is the starting point. We can only accept PRs which contain new components if we can find a related issue for it.

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

This project makes use of `"checkJs": false` in the tsconfig.json file which makes sure that nasty typescript errors do not fire up with common js and jsx files.

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

- Get the latest version of the main branch
  `git pull upstream main`
- Make sure that you make your changes always in the dev branch.
- Check in which branch you currently are
  `git branch`
  Then you will see something like this:
  ```
  * dev
  main
  ```
- If you are not in the dev branch switch to the dev branch
  `git checkout --track origin/dev`  
  _\* Next times you run this you can use `git checkout dev`.
  The `--track` flag and the remote name are only needed for the first checkout._
- Get the latest version of the dev branch
  `git pull upstream dev`
- Start hacking 💻

#### Keep the remote repository (forked version) up-to-date 🔄

- Get the latest version of the dev branch (confirm that you're on the `dev` branch first)
  `git pull upstream dev`
- Get the latest version of the main branch
  `git pull upstream main`
- Push the new files to your forked version
  `git push origin dev`

## Creating PRs 🆕

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
- Let the world know that you made a awesome PR to a great open source project by sharing it on [Twitter](https://ctt.ac/foi8n)

## This project uses the MIT License

When you submit code changes, your submissions are understood to be under the same MIT License that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issues](../../issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](../../issues); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People _love_ thorough bug reports. I'm not even kidding.

## Use a Consistent Coding Style

Observe the coding style of the project and add your code also in the same style.
**Don't make major changes** (Like changing the complete folder structure)
