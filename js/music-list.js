(function() {
    var musicList = {
        _musicList: [],
        init: function(files) {
            var me = this;
            Array.prototype.forEach.call(files, function(file) { 
            	var musicModel = app.musicModel({
            		path:URL.createObjectURL(file),
            		title:file.name,
                    file:file,
            	});
                me._musicList.push(musicModel);
            });
            return this._musicList;
        },
        removeMusic:function(files){

        }

    }
    window.app.musicList = musicList;
}());
