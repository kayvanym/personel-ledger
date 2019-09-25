<!-- vscode-markdown-toc -->
* [How to copy the project](#Howtocopytheproject)
* [Available Scripts](#AvailableScripts)
	* [`npm start`](#npmstart)
	* [`npm test`](#npmtest)
	* [`npm run build`](#npmrunbuild)
	* [`npm run eject`](#npmruneject)
    * [predeploy with `npm run build`](#props)
    * [deploy to Gh pages with `npm run deploy`](#props)
* [Learn More](#LearnMore)
	* [Code Splitting](#CodeSplitting)
	* [Analyzing the Bundle Size](#AnalyzingtheBundleSize)
	* [Making a Progressive Web App](#MakingaProgressiveWebApp)
	* [Advanced Configuration](#AdvancedConfiguration)
	* [Deployment](#Deployment)
	* [`npm run build` fails to minify](#npmrunbuildfailstominify)
* [Prerequisites](#Prerequisites)
* [Procedure](#Procedure)
* [Publish your app to Github pages](#DeployingaReactApp*toGitHubPages)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# About this application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The "app" is developed as a excercise / training environment for our lectures in ReactJS. This app is aimed at using react features map, arrow functions and filtering of data.

This application is published to [Github Pages](https://hogskolan-i-boras.github.io/personel-ledger/ "Personel Ledger on Github Pages")

## Resources

This application is built with the following resources

* [React ComponentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)
* [React Semantic UI CSS](https://react.semantic-ui.com)
* [Randomuser.me](https://randomuser.me)

# <a name='Howtocopytheproject'></a>How to copy the project

You can choose to download the project as a zip-file to your computer by clicking the green button, or you can choose to copy it over to your own Github account by "forking" the repository.

Forking means that you copy, or clone, the entire repository into your own repository on Github. It's the preferred way of doing things. And it is easy too, you create an account with Github and then just visit our repository and click the button "fork" in the upper right menu. Done. 

You now have your own copied version of our repository. And in order to download it, you need to have Git installed on your computer. When installed you simply create a folder where you want all of your repositories to be, then open your terminal window and type in following command, remember to replace the URL with your own respository URL if your forked our repository.

```git
git clone https://github.com/hogskolan-i-boras/personel-ledger.git
```

(On Mac you might have to add 'sudo' to the command)

## <a name='AvailableScripts'></a>Available Scripts

In the project directory, you can run:

### <a name='npmstart'></a>`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### <a name='npmtest'></a>`npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### <a name='npmrunbuild'></a>`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### <a name='npmruneject'></a>`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## <a name='LearnMore'></a>Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### <a name='CodeSplitting'></a>Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### <a name='AnalyzingtheBundleSize'></a>Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### <a name='MakingaProgressiveWebApp'></a>Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### <a name='AdvancedConfiguration'></a>Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### <a name='Deployment'></a>Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### <a name='npmrunbuildfailstominify'></a>`npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# <a name='DeployingaReactApp*toGitHubPages'></a>Deploying a React App* to GitHub Pages

\* created using `create-react-app`

# Introduction

In this tutorial, I'll show you how I deployed a React app—which I created using `create-react-app`—to GitHub Pages.

You can visit the deployed app, at [https://hogskolan-i-boras.github.io/personel-ledger/](https://hogskolan-i-boras.github.io/personel-ledger/).

This repository contains the files related to the app. The `master` branch contains the app's source code (the code the app's developers edit), and the `gh-pages` branch contains a *built* version of the app (i.e. the code that GitHub Pages serves to the app's visitors).

The remainder of this document contains a tutorial on creating a React app (using `create-react-app`) and deploying that app to GitHub Pages.

# Tutorial

## <a name='Prerequisites'></a>Prerequisites

1. An adequate version of [`Node.js`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ node --version
    v6.10.1
    ```

2. An adequate version of  [`npm`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ npm --version
    3.10.10
    ```
3. An adequate version of [`create-react-app`](https://github.com/facebookincubator/create-react-app) is installed. Here's the adequate version I use:

    ```sh
    $ create-react-app --version
    1.3.1
    ```

    In the case of `create-react-app`, you can either install it globally (i.e. `$ npm install -g create-react-app`) or install it locally (i.e. `$ npm install create-react-app`). If you choose the latter, you will have to specify its path whenever you invoke it (e.g. `path/to/node_modules/.bin/create-react-app`).

4. (**Optional**) An adequate version of [`sed`](http://www.gnu.org/software/sed/) is installed. Here's the adequate version I use:

   ```sh
   $ sed --version
   sed (GNU sed) 4.4
   ```

5. A [GitHub](https://www.github.com) account. :octocat:

6. A command-line Git client [setup according to GitHub](https://help.github.com/articles/set-up-git/).

## <a name='Procedure'></a>Procedure

1. **Create an *empty* repository on GitHub.** (2 minutes)

    * For this tutorial, I'll create a repository named `react-gh-pages`.
    * By *empty*, I mean *without* a `README.md` file, a `.gitignore` file, a `LICENSE` file, or any other files.

2. **Create a new React app on your computer.** (5 minutes)

    ```sh
    $ create-react-app react-gh-pages
    ```
    
    * This is the app you will deploy to GitHub Pages in step 7.
    * I opted to give the app the same name as my GitHub repository (i.e. `personel-ledger`). However, you can name them differently from one another (e.g. you can name your app `app-123` and your GitHub Repository `repo-456`).
    * This will create a new folder named `personel-ledger` (or whatever you named your app) on your computer.

3. **Install the `gh-pages` package as a "dev-dependency" of the app.** (1 minute)

    ```
    $ cd react-gh-pages
    $ npm install gh-pages --save-dev
    ```
    
    * The commands shown in the following steps can all be issued from within the app's folder.

4. <a name='props'><a/> **Add some properties to the app's `package.json` file.** (3 minutes)

    * At the top level, add a `homepage` property. Define its value to be the string `http://{username}.github.io/{repo-name}`, where `{username}` is your GitHub username, and `{repo-name}` is the name of the GitHub repository you created in step 1. Since my GitHub username is `gitname` and the name of my GitHub repository is `personel-ledger`, I added the following property:
    
    ```js
    //...
    "homepage": "https://hogskolan-i-boras.github.io/personel-ledger/"
    ```
    
    * In the existing `scripts` property, add a `predeploy` property and a `deploy` property, each having the values shown below:

    ```js
    "scripts": {
      //...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```
    
    * **Shortcut:** Instead of adding those properties using a text editor; if I have `sed` installed on my system, I can add the properties by issuing the following shell commands:
    
    ```sh
    $ sed -i '5i\  "homepage": "https://hogskolan-i-boras.github.io/personel-ledger/",' ./package.json
    $ sed -i '15i\    "predeploy": "npm run build",' ./package.json
    $ sed -i '16i\    "deploy": "gh-pages -d build",' ./package.json
    ```
    
5. **Create a git repository in the app's folder.** (1 minute)

    ```
    $ git init
    Initialized empty Git repository in C:/path/to/https://hogskolan-i-boras.github.io/personel-ledger/.git/
    ```

6. **Add the GitHub repository as a "remote" in your local git repository.** (1 minute)

    ```
    $ git remote add origin https://github.com/hogskolan-i-boras/personel-ledger.git
    ```
    
    * This will make it so the `gh-pages` package knows where you want it to deploy your app in step 7.
    * It will also make it so git knows where you want it to push your source code (i.e. the commits on your `master` branch) in step 8.

7. **Generate a *production build* of your app, and deploy it to GitHub Pages.** (2 minutes)

    ```
    $ npm run deploy
    ```
    
    * That's it! Your app is now accessible at the URL you specified in step 4.
    * In my case, my app is now accessible at: https://hogskolan-i-boras.github.io/personel-ledger/
    * I recommend exploring the GitHub repository at this point. When I explored it, I noticed that, although a `master` branch did not exist, a `gh-pages` branch did exist. I noticed the latter contained the *built* app code, as opposed to the app's source code.

8. **Optionally, commit your source code to the "master" branch and push your commit to GitHub.** (1 minute)

    ```
    $ git add .
    $ git commit -m "Create a React app and publish it to GitHub Pages"
    $ git push origin master
    ```

    * I recommend exploring the GitHub repository once again at this point. When I did that, I noticed that a `master` branch now existed, and it contained the app's source code.
    * So, the `master` branch held the source code, and the `gh-pages` branch held the *built* app code.

# References

1. [Facebook's tutorial on deploying a React app to GitHub Pages](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom)

# Notes

* I created this React app using [`create-react-app`](https://github.com/facebookincubator/create-react-app). By default, apps created using `create-react-app` have a README.md file that looks like [this](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Indeed, the README.md file you're now reading originally looked like that. I have since changed it to look the way it looks today.
* Special thanks to GitHub, Inc., for providing us with the GitHub Pages hosting functionality at no extra charge.
* And now, time to turn the default `create-react-app` app into something unique!