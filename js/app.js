(function() {
    'use strict';
    var app = {
        inputDOM: document.getElementById('music-input'),
        processedFiles: null,
        audioDOM: document.getElementById('audio'),
        playModeDOM: document.getElementById('play-mode'),
        playDOM: document.getElementById('play'),
        switchDOM: document.getElementById('switch-container'),
        musicListDOM: document.getElementById('music-list'),
        progressBarDOM: document.getElementById('progress-bar'),
        playMode: 'sequential',
        _current: 0, // current music playing in audio
        _isPlaying: false,
        init: function() { //some initial bindings
            this.inputDOM.addEventListener('change', this.handleInput.bind(app));
            this.switchDOM.addEventListener('click', this.handleSwitch.bind(app));
            //forgery event parameter for this callback to acheive autoplay
            this.audioDOM.addEventListener('ended', this.handleSwitch.bind(app, { target: { id: 'next' } }));
        },
        handleInput: function(e) {
            this.processedFiles = app.musicList.init(e.target.files);
            this.handlePlayMode(this.playMode);
            this.renderMusicList();
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
            this.renderProgressBar();
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
        },
        renderMusicList: function() {
            var me = this;
            this.musicListDOM.innerHTML = '';
            this.processedFiles.forEach(function(music) {
                var li = document.createElement('li');
                li.id = music.mTitle;
                li.innerHTML = music.mTitle + "<button>delete</button>"
                me.musicListDOM.appendChild(li);
            });
        },
        renderProgressBar: function() {
            clearInterval(a);
            var a = setInterval(function() {
                this.progressBarDOM.children[0].style.left =
                    (this.audioDOM.currentTime / this.audioDOM.duration) * 200 + 'px';
            }.bind(this), '1000');
        },


    }
    app.init();
    return (window.app = app);
}());
