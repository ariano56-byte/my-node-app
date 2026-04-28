# Wonderzyme ERP Website

This repository contains a simple Node.js server that serves a single-page website from `wonderxyme.html`.

## Usage

1. Install Node.js if it is not already installed.
2. Open a terminal in the project folder:
   ```bash
   cd c:\Users\USER\Documents\my-node-app
   ```
3. Run the server:
   ```bash
   node index.js
   ```
4. Open your browser and visit:
   ```text
   http://localhost:3000
   ```

## Files

- `index.js` - Node.js server that serves the HTML file.
- `wonderxyme.html` - Website page content.

## Notes

- The server serves the page at `/`, `/index.html`, and `/wonderxyme.html`.
- The HTML page is self-contained and ready to customize.

## Vercel deployment

This project is configured for Vercel static deployment.

1. In Vercel, import the repo `ariano56-byte/my-node-app`.
2. Set the build command to:
   ```bash
   npm run build
   ```
3. Set the output directory to:
   ```text
   .
   ```
4. Add environment variables in Vercel Settings:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

On each deploy, Vercel will generate `supabase-config.js` from your environment variables.
