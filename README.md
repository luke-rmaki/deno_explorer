# Deno Explorer

A command line based file explorer that allows you to navigate the file system and return the path to a selected file

```javascript
import open from "https://deno.land/x/deno_explorer@v1.0.0/mod.ts";

const choice = await open();


// By default the open function doesn't include dot files. See the below if you want to include them
const choice = await open(true);


```
