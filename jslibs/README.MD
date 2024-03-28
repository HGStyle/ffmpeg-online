# README - JS libraries

From where are these libraries comming from ?

Here is a table of the files at their latest version (not the exact same as in this repo):

| Filename | Download URL | License | Project Name |
|---|---|---|---|
| jquery.js | https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js | MIT License | [jQuery](https://github.com/jquery/jquery) |
| ffmpeg.js | https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg/dist/umd/ffmpeg.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| 818.ffmpeg.js | https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg/dist/umd/814.ffmpeg.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| ffmpeg-core.min.js | https://cdn.jsdelivr.net/npm/@ffmpeg/core/dist/umd/ffmpeg-core.min.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| ffmpeg-core.wasm | https://cdn.jsdelivr.net/npm/@ffmpeg/core/dist/umd/ffmpeg-core.wasm | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| ffutil.js | https://cdn.jsdelivr.net/npm/@ffmpeg/util/dist/umd/index.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| mime-db.json | https://cdn.jsdelivr.net/gh/jshttp/mime-db/db.json | MIT License | [MIME-DB](https://github.com/jshttp/mime-db) |
| ext2mime.js | https://hgstyle.github.io/ffmpeg-online/jslibs/ext2mime.js | MIT License | [FFMPEG-ONLINE](https://github.com/HGStyle/ffmpeg-online) |

Here is the table of the exact files you will find in the repo (except for mime-db.json because its the master branch):

| Filename | Download URL | License | Project Name |
|---|---|---|---|
| jquery.js | https://code.jquery.com/jquery-3.7.1.min.js | MIT License | [jQuery](https://github.com/jquery/jquery) |
| ffmpeg.js | https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.7/dist/umd/ffmpeg.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| 818.ffmpeg.js | https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.7/dist/umd/814.ffmpeg.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| ffmpeg-core.min.js | https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.4/dist/umd/ffmpeg-core.min.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| ffmpeg-core.wasm | https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.4/dist/umd/ffmpeg-core.wasm | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| ffutil.js | https://cdn.jsdelivr.net/npm/@ffmpeg/util@0.12.1/dist/umd/index.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| mime-db.json | https://cdn.jsdelivr.net/gh/jshttp/mime-db@1.52.0/db.json | MIT License | [MIME-DB](https://github.com/jshttp/mime-db) |
| ext2mime.js | https://ffmpeg-online.hgstyle.fr/jslibs/ext2mime.js | MIT License | [FFMPEG-ONLINE](https://github.com/HGStyle/ffmpeg-online) |

You can change the version of the files, it should not break things (except if you set FFMPEG.WASM version to anything below 0.12.0).

Actually ext2mime.js has been made by me to load and parse the mime-db.json file. It is inclued in this project and has the same license.

NOTE: For multiprocessing support, you must [fulfill these requirements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) use these links instead:

| Filename | Download URL | License | Project Name |
|---|---|---|---|
| ffmpeg-core.min.js | https://cdn.jsdelivr.net/npm/@ffmpeg/core-mt/dist/umd/ffmpeg-core.min.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| ffmpeg-core.wasm | https://cdn.jsdelivr.net/npm/@ffmpeg/core-mt/dist/umd/ffmpeg-core.wasm | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
