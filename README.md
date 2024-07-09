# ffmpeg-online
Wanna try/use FFMPEG without installing anything ? Then this is for you ! Everything is done client-sidely using JavaScript and WebAssembly, using the project FFMPEG.WASM

## Use online

You can access to the [stable server (hosted in France at O2Switch)](https://ffmpeg-online.hgstyle.fr/) or to the [unstable server (hosted in United States at GitHub)](https://hgstyle.github.io/ffmpeg-online/).

## Use offline

Download the code source of that repository [as ZIP](https://github.com/HGStyle/ffmpeg-online/archive/refs/heads/main.zip), [as GZIPed TAR](https://github.com/HGStyle/ffmpeg-online/archive/refs/heads/main.tar.gz) or using Git: `git clone https://github.com/HGStyle/ffmpeg-online.git`, then extract the download archive (if you did not used the Git command) and just double click (on Windows and MacOS, Linux users may just need a single click) the file called `index.html`.

## Project released under the [MIT License](https://hgstyle.mit-license.org/2023) (a.k.a. [Expat License, X11 License or MIT/X License](https://en.wikipedia.org/wiki/MIT_License#Ambiguity_and_variants))

Copyright © 2023-until the end of the universe HGStyle.

## Info about JavaScript libraries used

Files in the `jslibs` directory has been released by different persons from different projects, ~maybe using a different license~ (for now, they all use the same license as this project): [read this for more info](https://github.com/HGStyle/ffmpeg-online/blob/main/jslibs/README.MD).

## Some alternative projects to this one

I'm not the first human to ever do an interface for FFMPEG.WASM. Lots of people did work before me, even thought I have no link and didn't seen their project until now.
Even thought my interface is not very very good, this is probably one of the only project not using JavaScript frameworks (I only used jQuery) so my project may be more
suitable for developpers who want to implement it to other JavaScript frameworks or implement it without one.
- FFMPEG-WEB by dinoosauro - GitHub: https://github.com/dinoosauro/ffmpeg-web - Website: https://ffmpeg-web.netlify.app/
- FFMPEG-ONLINE by xiguaxigua - GitHub: https://github.com/xiguaxigua/ffmpeg-online - Website: https://ffmpeg-online.vercel.app/
- FFMPEG-CLI-ONLINE by cs8425 - GitHub: https://github.com/cs8425/ffmpeg-cli-online - Website: https://sauceburnseal.net/ffmpeg/
- FFMPEG-JS-UI by edelgarat - GitHub: https://github.com/edelgarat/ffmpeg_js_ui - Website: https://edelgarat.github.io/ffmpeg_js_ui/
- FFMPEG-IN-BROWSER by chn-lee-yumi - GitHub: https://github.com/chn-lee-yumi/ffmpeg_in_browser - Website: https://ffmpeg.gcc.ac.cn/
- FFMPEG-WASM by wide-video - GitHub: https://github.com/wide-video/ffmpeg-wasm - Website: https://ffmpeg.wide.video/
- FFMPEG-APP by zeh - GitHub: https://github.com/zeh/ffmpeg.app - Website: https://ffmpeg.app/

## Other possible ways to do it

This project uses FFMPEG.WASM, but there are other ways it could work. While I'm probably never gonna change the library of this project, I'm gonna give some links to possible alternatives that
can be explored for more optimizations or simply alternatives:
- FFMPEG.WASM by ffmpegwasm is the implementation I use, althrought it still does not supports many libraries, it works in general. GitHub: https://github.com/ffmpegwasm/ffmpeg.wasm
- FFMPEG-WASM by wide-video is annother implementation that I discovered that seems to have more libraries supported, so more format supported too. GitHub: https://github.com/wide-video/ffmpeg-wasm
- FFMPEG for WASIX by ptitseb is an implementation made for WASIX/WASMER althought it doesn't seems updated anymore (no updates for 8 months when I'm writting this), and it's not made for
  browser usage. However, according to [this HackerNews comment](https://news.ycombinator.com/item?id=37892961) posted [here](https://news.ycombinator.com/item?id=37891518), it would maybe possible to use it in a webbrowser. Wasmer: https://wasmer.io/wasmer/ffmpeg
- One last "hard way" or more "weird way" would be to use [JSLinux](https://bellard.org/jslinux/), by example the [Alpine Linux x86 Console-Only VM](https://bellard.org/jslinux/vm.html?url=alpine-x86.cfg&mem=192) which includes FFMPEG **by default**. Maybe with some scripting someone would be able to make a FFMPEG JavaScript interface with it. Or just use [v86](https://github.com/copy/v86) and its JavaScript API, it requires less time to setup I'd guess.
