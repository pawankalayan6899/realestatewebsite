#!/bin/bash

# Image Optimization
echo "Optimizing images..."
find ./src/assets/images -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.jpeg" \) -exec convert {} -quality 85 {} \;

# Remove unused files
echo "Removing unused files..."
find . -type f \( -name "*.test.js" -o -name "*.spec.js" -o -name "*.log" \) -delete

# Generate sitemap
echo "Generating sitemap..."
npx sitemap-generator https://yourdomain.com

# Performance audit
echo "Running performance audit..."
npx lighthouse https://yourdomain.com --view

echo "Optimization complete!"
