var fs = require('fs'),
	path = require('path');

function traverse(map, root) {
	if (!root) {
		root = map;
		map = {};
	}

	var name = path.basename(root),
		isDir = fs.statSync(root).isDirectory();

	map[name] = !isDir ? name : fs.readdirSync(root).reduce(function (map, file) {
		return traverse(map, path.resolve(root, file));
	}, {});

	return map;
}

module.exports = traverse;