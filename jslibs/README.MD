# README - JS libraries

From where are these libraries comming from ?

| Filename | Download URL | License | Project Name |
|---|---|---|---|
| jquery.js | https://code.jquery.com/jquery-3.7.1.min.js | MIT License | [jQuery](https://github.com/jquery/jquery) |
| ffmpeg.js | https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.7/dist/umd/ffmpeg.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| 818.ffmpeg.js | https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.7/dist/umd/814.ffmpeg.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| ffmpeg-core.min.js | https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.4/dist/umd/ffmpeg-core.min.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| ffmpeg-core.wasm | https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.4/dist/umd/ffmpeg-core.wasm | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| ffutil.js | https://cdn.jsdelivr.net/npm/@ffmpeg/util@0.12.1/dist/umd/index.js | MIT License | [FFMPEG.WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) |
| mime-db.json | https://cdn.jsdelivr.net/gh/jshttp/mime-db@master/db.json | MIT License | [MIME-DB](https://github.com/jshttp/mime-db) |
| ext2mime.js | https://ffmpeg-online.hgstyle.fr/jslibs/ext2mime.js | MIT License | [FFMPEG-ONLINE](https://github.com/HGStyle/ffmpeg-online) |

You can change the version of the files, it should not break things (except if you set FFMPEG.WASM version to anything below 0.12.0).

Actually ext2mime.js has been made by me to load and parse the mime-db.json file. It is inclued in this project and has the same license.
