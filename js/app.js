(function() {
    'use strict';
    var app = {
        inputDOM: document.getElementById('music-list'),
        processedFiles: null,
        audioDOM: document.getElementById('audio'),
        playModeDOM: document.getElementById('play-mode'),
        playDOM: document.getElementById('play'),
        switchDOM: document.getElementById('switch-container'),
        playMode: 'sequential',
        _current: 0, // current music playing in audio
        _isPlaying: false,
        init: function() { //some initial bindings
            this.inputDOM.addEventListener('change', this.handleInput.bind(app));
            this.switchDOM.addEventListener('click', this.handleSwitch.bind(app));
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
        handlePlay: function(switching) {
            if (switching) {
                this._isPlaying = true;
                this.audioDOM.play();
                this.playDOM.innerHTML = '暂停';
                return;
            }
            if (this._isPlaying) {
                this.audioDOM.pause();
                this.playDOM.innerHTML = '播放';
            } else {
                this.audioDOM.play();
                this.playDOM.innerHTML = '暂停';
            }
            this._isPlaying = !this._isPlaying;
        },
        handleSwitch: function(e) {
            if (this.processedFiles) {
            	var length = this.processedFiles.length;
                if (e.target.id == 'next') {
                    if (this._current != --length) {
                        ++this._current;
                        this.audioDOM.src = this.processedFiles[this._current].mPath;
                        this.handlePlay(true);
                        return;
                    } else {
                        this._current = 0;
                        this.audioDOM.src = this.processedFiles[this._current].mPath;
                        this.handlePlay(true);
                        return;
                    }

                }
                if (e.target.id == 'pre') {
                    if (this._current != 0) {
                        --this._current;
                        this.audioDOM.src = this.processedFiles[this._current].mPath;
                        this.handlePlay(true);
                        return;
                    } else {
                        this._current = --length;
                        this.audioDOM.src = this.processedFiles[this._current].mPath;
                        this.handlePlay(true);
                        return;
                    }
                }
                if (e.target.id == 'play') {
                    this.handlePlay();
                }
            } else {
                window.alert('请选择一个音乐文件夹');
            }
        }

    }
    app.init();
    return (window.app = app);
}());
