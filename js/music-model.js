(function() {
    'use strict';

    function musicModel(options) {
        var _id = 0;
        var _musicModel = {
            mId: _id++,
            mPath: options.path,
            mTitle: options.title,
            mArtist: options.artist || null,
            mLength: options.length || null,
            mCover: null,
            mFile:options.file,
            play: function() {

            },
        };
        return _musicModel;
    }
    window.app.musicModel = musicModel;

})();
