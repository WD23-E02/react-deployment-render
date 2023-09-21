## steps to deploy into gh-pages

- first install gh-pages

  ```
  npm install gh-pages --save-dev

  ```

- Add deploy script on your package.json file

```
"scripts": {
"deploy": "vite build && gh-pages -d dist"
}
```

- add this configuration into your package.json file

  ```
  "homepage": "https://yourGithubname.github.io/your-repo-name",
  ```

- in your vite.config.js file, add your base repo

  ```
  export default {
  base: '/my-repo-name/',
  }
  ```

- Deploy to GitHub Pages:

In your terminal, run:

```
npm run deploy

```

- last step is to configure GitHub Pages:

Go to your repository on GitHub.
Navigate to Settings > Pages.

- Under Source, select gh-pages branch and save.

- lastly just click on the url link and your App is deployed there

## steps to deploy into vercel

- Create a Vercel account:

- Sign up for a Vercel account if you haven't already.

- install vercel in your locally

  ```
  npm install -g vercel

  ```

- Login to Vercel from your terminal

  ```
  vercel login
  ```

  Follow the prompts to log in.

- Deploy to Vercel just write :
  ```
  vercel
  ```
  (Follow the prompts to deploy your project. Vercel will automatically build and deploy it.)
