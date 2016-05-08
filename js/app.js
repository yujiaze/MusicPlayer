(function() {
    var app = {
        inputDOM: document.getElementById('music-list'),
        processedFiles: null,
        audioDOM: document.getElementById('audio'),
        playModeDOM: document.getElementById('play-mode'),
        playDOM: document.getElementById('play'),
        playMode: 'sequential',
        _current: 0,
        _isPlaying: false,
        init: function() {
            this.inputDOM.addEventListener('change', this.handleInput.bind(app));
            this.playDOM.addEventListener('click', this.handlePlay.bind(app)); //must bind
        },
        handleInput: function(e) {
            this.processedFiles = app.musicList.init(e.target.files);
            this.handlePlayMode(this.playMode);
        },
        handlePlayMode: function(playMode) {
            switch (playMode) {
                case 'sequential':
                    this._current = 0;
                    this.audioDOM.src = this.processedFiles[this._current].mPath;
                    break;
                default:
                    _current = 0;
                    this.audioDOM.src = this.processedFiles[this._current].mPath;
            }
        },
        handlePlay: function() {
            if (this.processedFiles != null) {
                if (this._isPlaying) {
                    this.audioDOM.pause();
                    this.playDOM.innerHTML = '播放';
                } else {
                    this.audioDOM.play();
                    this.playDOM.innerHTML = '暂停';
                }
                this._isPlaying = !this._isPlaying;
            }
            else{
            	window.alert('请选择一个音乐文件夹');
            }

        }

    }
    app.init();
    return (window.app = app);
}());
