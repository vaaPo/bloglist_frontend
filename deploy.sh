#!/bin/sh
npm run build 
rm -rf ../bloglist_backend/build
cp -r build ../bloglist_backend
