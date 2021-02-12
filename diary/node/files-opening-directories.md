---
title: 'Files: Opening Directories'
eleventyNavigation:
  key: 'Files: Opening Directories'
  parent: Node
---

I'll be writing about the [fs Promise API](https://nodejs.org/api/fs.html#fs_fs_promises_api) here, not to be confused with other ways to do this in older versions of Node.

There appears to be two ways of working with directories in Node: [`openDr`](https://nodejs.org/api/fs.html#fs_fspromises_opendir_path_options) and [`readDir`](https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options).

# opendir 

`opendir` will resolve to a [`fs.Dir`](https://nodejs.org/api/fs.html#fs_class_fs_dir) class, this represents the directory. The `fs.Dir` class is iterable like below. The iterable is a [`fs.Dirent`] (short for directory entry) and mostly contains metadata about the file type (A file time as in one of the [Unix file types](https://en.wikipedia.org/wiki/Unix_file_types), not the media type). The iterator doesn't provide entries in a particular order, just by whatever the underlying OS feels like giving at the time [[Source]](https://nodejs.org/api/fs.html#fs_dir_symbol_asynciterator).

```javascript
const directory = await fs.opendir(path);
for await (const dirent of directory) {
    console.log(dirent);
}
```

It is unclear if Node closes the directory itself, there is no indication in the docs as such. [This article](https://medium.com/swlh/node-js-fs-module-opening-directories-a27ad89916aa) claims that in the Promises API version of `fs`, the diretory is closed automatically. In any case, it is possible to explicitly call `.close()` on a `fs.Dir` object.

# readdir

`readdir` will resolve to an array of filenames within the directory, but excludes `.` and `..`. If options.withFileTypes is set to true, the resolved array will contain fs.Dirent objects, which is really equivalent to the `opendir` method.

```javascript
const files = await fs.opendir(path);
for await (const file of directory) {
    console.log(file);
}
```