async function main() {
    // Check for JavaScript
    $('#nojs').hide();

    // Check for WebAssembly  - code from: https://stackoverflow.com/a/47880734
    if ((() => {
        try {
            if (typeof WebAssembly === "object"
                && typeof WebAssembly.instantiate === "function") {
                const module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
                if (module instanceof WebAssembly.Module) {
                    return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
                }
            }
        } catch (e) {}
        return false;
    })()) {
        $('#nowasm').hide();
    }

    // Set the variables containing old Blob URLs to delete them when needed
    last_preview_url = "";
    last_download_url = "";

    // Get and parse the MIME-DB data
    mimedb = await get_parsed_data();

    // Get the current page URL
    pageurl = location.href.replace(/\/[^\/]+?\.[^\/]+?$/, '/');

    // Show wait text
    $('#wait').show();

    // Initiates FFMPEG
    ffmpeg = new FFmpegWASM.FFmpeg();
    await ffmpeg.load({
        coreURL: pageurl + "jslibs/ffmpeg-core.min.js",
        wasmURL: pageurl + "jslibs/ffmpeg-core.wasm"
    });

    // Register the FFMPEG log action
    ffmpeg.on('log', async function (type, message) {
        if (type['message'].replace(/^\s+|\s+$/gm,'') != "Aborted()") {
            $('#output').html($('#output').html() + '<br>' + type['message']);
        }
    })
    
    // Hide wait text
    $('#wait').hide();

    // Register the run button action
    $('#run').click(async function () {
        if ($('#command').val().replace(/^\s+|\s+$/gm,'')) {
            $('#returncode').text('');
            $('#output').text('');
            $('#returncode').html($('#returncode').html() + '<br>' + 'Return code (0 = OK else fail): ' + 
            (await ffmpeg.exec(
                $('#command').val().replace(/^\s+|\s+$/gm,'').split(' ')
            )));
            // Resync the file list
            loaded_files = $('#fileselect').map(function () { return this.value }).get();
            files = await ffmpeg.listDir(".");
            for (i = 0; i < files.length; i++) {
                if (!files[i]['isDir']) {
                    filename = files[i].name.replace(/ /g, '_');
                    if (loaded_files.indexOf(filename) == -1) {
                        $('#fileselect').append($('<option>').val(filename).text(filename));
                    }
                }
            }
        }
    });

    // Register the load file button action
    $('#loadfile').click(async function () {
        loaded_files = $('#fileselect').map(function () { return this.value }).get();
        files =  $('#fileloader')[0].files;
        for (i = 0; i < files.length; i++) {
            filename = files[i].name.replace(/ /g, '_');
            if (loaded_files.indexOf(filename) == -1) {
                await ffmpeg.writeFile(filename, new Uint8Array(await files[i].arrayBuffer()));
                $('#fileselect').append($('<option>').val(filename).text(filename));
            }
        }
    });

    // Register the remove file button action
    $('#removefile').click(async function () {
        filename = $('#fileselect option:selected')[0].value;
        await ffmpeg.deleteFile(filename);
        $('option[value="' + filename + '"]').remove();
    });

    // Register the download file button action
    $('#downloadfile').click(async function () {
        // Delete the old download blob URL if there is one, but not for the preview because it will still be opened after download
        if (last_download_url) {
            URL.revokeObjectURL(last_download_url);
        }
        filename = $('#fileselect option:selected')[0].value;
        ext = filename.substring(filename.lastIndexOf('.') + 1);
        if (mimedb.hasOwnProperty(ext)) {
            url = URL.createObjectURL(new Blob([await ffmpeg.readFile(filename)], {type: mimedb[ext]}));
        } else {
            url = URL.createObjectURL(new Blob([await ffmpeg.readFile(filename)]));
        }
        dl = $('<a>').hide().attr('download', filename).attr('href', url).appendTo('body').get(0);
        dl.click(); dl.remove();
        last_download_url = url;
    });
    
    // Register the preview file button action
    $('#previewfile').click(async function () {
        // Delete the old preview blob URL if there is one, but not for the download because it may still be downloading
        if (last_preview_url) {
            URL.revokeObjectURL(last_preview_url);
        }
        filename = $('#fileselect option:selected')[0].value;
        ext = filename.substring(filename.lastIndexOf('.') + 1);
        if (mimedb.hasOwnProperty(ext)) {
            mime = mimedb[ext];
            url = URL.createObjectURL(new Blob([await ffmpeg.readFile(filename)], {type: mime}));
            video = $('#preview-player video source');
            audio = $('#preview-player audio source');
            image = $('#preview-player img');
            // .parent() is needed on video and audio because its the source element, not the actual video or audio element which is hidden
            // .get(0).load() is needed to refresh the link else it wont show anything
            if (mime.startsWith('video')) {
                video.attr('src', url);
                video.attr('type', mime);
                audio.parent().hide();
                image.hide();
                video.parent().show();
                video.parent().get(0).load();
            } else if (mime.startsWith('audio')) {
                audio.attr('src', url);
                audio.attr('type', mime);
                video.parent().hide();
                image.hide();
                audio.parent().show();
                audio.parent().get(0).load();
            } else if (mime.startsWith('image')) {
                image.attr('src', url);
                video.parent().hide();
                audio.parent().hide();
                image.show();
            }
            last_preview_url = url;
        } else {
            alert("ERROR: The file could not be reconized !");
        }
    });

    // Show the UI
    $('#ui').show();
}; main();
