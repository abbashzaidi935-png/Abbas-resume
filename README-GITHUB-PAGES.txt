GitHub Pages-ready Next.js export
================================

This copy was cleaned for GitHub Pages deployment.

What changed
- Removed .DS_Store
- Updated next.config.mjs for static export
- Updated .github/workflows/static.yml to build and deploy the out/ folder

Important
This config assumes your GitHub repository name is:
Abbas-resume-main

If your actual repo name is different, change this line in next.config.mjs:
const repoName = "Abbas-resume-main"

Then push to the main branch and make sure GitHub Pages is set to GitHub Actions in the repository settings.
