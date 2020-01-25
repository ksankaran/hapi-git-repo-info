# hapi-git-repo-info
Get git repo information like current branch, last committer, etc.

## Add to manifest.json
```
{ "plugin": { "register": "hapi-info" } }
```

## Add to plugins
```
await server.register({
        plugin: require('hapi-git-repo-info')
});
```

## Using manifest glue manually
Copy the index.js file to your repo and perform the below action
```
manifest.register.plugins.push({
  plugin: require("./plugins/hapi-branch")
});
```
