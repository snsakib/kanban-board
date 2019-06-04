#!/bin/bash

echo "Starting script..."

# Production build
echo "Building production files..."
ng build --prod --output-path docs --base-href /angular-pdf-viewer/

# Creating 404.html
echo "Creating 404.html"
cd docs
sed -i "s/\(C:\/Program\sFiles\/Git\/angular-pdf-viewer\/\)/\/angular-pdf-viewer\//" index.html
cp index.html 404.html

# Publishing to GitHub
echo 'Publishing to GitHub'
git add --all
git commit -m "chore: production build"
git push
