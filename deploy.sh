#!/bin/bash

# Ensure you're on the main branch
git checkout main

# Pull latest changes
git pull origin main

# Build the project
npm run build

# Initialize gh-pages if not already done
git branch -D gh-pages 2>/dev/null
git checkout -b gh-pages

# Remove all files except build directory
git rm -rf .
git clean -fxd

# Move build files to root
mv build/* .
rmdir build

# Add CNAME file if you have a custom domain
echo "thanvibuildtech.com" > CNAME

# Add, commit, and push to gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git push -f origin gh-pages

# Return to main branch
git checkout main

echo "Deployment to GitHub Pages completed successfully!"
