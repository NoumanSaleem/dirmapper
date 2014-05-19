#Dirmapper

Creates an object representing a directory and its' siblings (recursive)

```
/files
- file.js
- dir
-- file2.js
```

```javascript
require('dirmapper')('/folder'); ->
{
	files: {
		file.js: "file.js",
		dir: {
			file2.js: "file2.js"
		}
	}
}
```
