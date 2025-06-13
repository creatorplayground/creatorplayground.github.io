## Running Locally

To start the development server:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local server:

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173` by default.

---

## Deploying to Production

This project uses GitHub Pages to host the production build from the `gh-pages` branch.

To deploy changes live:

1. Commit and push your changes to the `main` branch:

   ```bash
   git add .
   git commit -m "Your message here"
   git push origin main
   ```

2. Run the deployment script, which builds the project and pushes the output to the `gh-pages` branch:

   ```bash
   npm run deploy
   ```

3. Visit your site at [https://creatorplayground.io](https://creatorplayground.io)

   > Note: GitHub Pages may take a minute or two to reflect changes. Clear your browser cache if you don’t see updates right away.
