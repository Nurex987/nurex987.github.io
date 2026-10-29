# NRX — Alani Nurudeen's portfolio

A responsive personal portfolio built with plain HTML, CSS, and JavaScript. It has no package dependencies, build step, backend, or paid service.

## Run it locally

Open `index.html` in a browser, or run a small local web server from this folder:

```powershell
py -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C`.

## Personalize the site

- **Name, introduction, education, and project descriptions:** edit the matching text in `index.html`.
- **Skills and project status:** update the Skills and Projects sections in `index.html`. Keep project status labels accurate as ideas become real work.
- **GitHub:** the profile link is `https://github.com/Nurex987` in `index.html`.
- **Email and LinkedIn:** replace the clearly marked placeholders in the Contact section when you have the right details. Don't add an invented profile link.
- **CV:** when you have a CV PDF, put it in this folder (for example, `Alani-Nurudeen-CV.pdf`) and add a download link near the hero actions:

  ```html
  <a class="button button-secondary" href="Alani-Nurudeen-CV.pdf" download>Download my CV</a>
  ```

- **Colors, layout, and responsive styles:** edit the variables near the top of `styles.css`, then adjust the relevant selectors below them.
- **Interactions:** `script.js` controls the small-screen menu and contact-message draft.

The contact form checks its fields and prepares a copyable message. It does not transmit or store anything. To receive messages directly, add a real email address or connect a form service/backend before changing the form's copy to say that it sends messages.

## Publish free with GitHub Pages

1. Create a new, public repository on GitHub. You can call it `nurex344.github.io` for a personal site or use another repository name.
2. In this folder, initialize Git, commit the site files, and push them to the repository's `main` branch:

   ```powershell
   git init
   git add index.html styles.css script.js favicon.svg README.md
   git commit -m "Build NRX portfolio"
   git branch -M main
   git remote add origin https://github.com/Nurex987/nurex987.github.io.git
   git push -u origin main
   ```

   Replace `REPOSITORY-NAME` with the repository you created. If Git asks, sign in using GitHub's recommended credential flow.

3. On GitHub, open the repository's **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/(root)` folder, then save.
4. Wait for the Pages deployment to finish. GitHub displays the published address in the Pages settings. A personal `nurex987.github.io` repository uses `https://nurex987.github.io/`; another repository generally uses `https://nurex987.github.io/REPOSITORY-NAME/`.

## Add a custom domain later

Buy a domain from a registrar when you are ready. In **Settings → Pages → Custom domain**, enter the domain and save. Follow the DNS records GitHub Pages shows for your domain type (apex or subdomain), then enable **Enforce HTTPS** after DNS has propagated. A domain costs money; hosting this site on GitHub Pages remains free.
