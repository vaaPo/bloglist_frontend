## bloglist frontend
To run frontend, please clone <https://github.com/vaaPo/bloglist_backend> and this repository:

```
$ ls blo*
bloglist_backend:
build  controllers  datafiles  index.js  models  node_modules  package.json  package-lock.json  README.md  requests  tests  utils

bloglist_frontend:
build  deploy.sh  node_modules  package.json  package-lock.json  public  README.md  src
$ cd bloglist_frontend
$ npm install
$ npm run build
$ ./deploy.sh
$ cd ../bloglist_backend
$ npm run watchtest
```

