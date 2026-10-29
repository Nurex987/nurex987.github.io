# NRX — Alani Nurudeen's portfolio

A responsive personal portfolio built with plain HTML, CSS, and JavaScript. It has no package dependencies or build step. The contact form uses FormSubmit to deliver messages to the portfolio owner's Gmail.

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
- **Email and LinkedIn:** the Contact section links to the portfolio owner's Gmail. Add a LinkedIn link once the profile is ready; don't add an invented profile link.
- **CV:** when you have a CV PDF, put it in this folder (for example, `Alani-Nurudeen-CV.pdf`) and add a download link near the hero actions:

  ```html
  <a class="button button-secondary" href="Alani-Nurudeen-CV.pdf" download>Download my CV</a>
  ```

- **Colors, layout, and responsive styles:** edit the variables near the top of `styles.css`, then adjust the relevant selectors below them.
- **Interactions:** `script.js` controls the small-screen menu and email contact form.

The contact form sends entries through [FormSubmit](https://formsubmit.co/). On the first submission, FormSubmit sends an activation email to the portfolio owner's Gmail; open it and confirm the form before it can deliver messages. The email address appears in the site source as required by the static form endpoint.

## Publish free with GitHub Pages

1. The public repository for this portfolio is [github.com/Nurex987/nurex987.github.io](https://github.com/Nurex987/nurex987.github.io).
2. To make a local copy to edit and sync with GitHub, clone the repository:

   ```powershell
   git clone https://github.com/Nurex987/nurex987.github.io.git
   cd nurex987.github.io
   ```

   Edit the files in that folder, then save and upload your changes with:

   ```powershell
   git add index.html styles.css script.js favicon.svg README.md
   git commit -m "Update portfolio"
   git push
   ```

3. GitHub Pages is already set to deploy from the `main` branch and the repository root. To change that later, open **Settings → Pages** and update **Build and deployment**.
4. The published site is at <https://nurex987.github.io/>.

## Add a custom domain later

Buy a domain from a registrar when you are ready. In **Settings → Pages → Custom domain**, enter the domain and save. Follow the DNS records GitHub Pages shows for your domain type (apex or subdomain), then enable **Enforce HTTPS** after DNS has propagated. A domain costs money; hosting this site on GitHub Pages remains free.
