
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$("a").click(function (event) {
    event.preventDefault()
});
const PLAYER_STORAGE_KEY = 'MUSIC_PLAYER'

const appName = $('.app')
const playlist = $('.body__music-songs-item')
const controlSong = $('.player-controls-left')
const audio = $('#audio')
const nameSong = $('.player-controls-left-name__song')
const singerSong = $('.player-controls-left-name__author')
const controlThumb = $('.player-controls-left-img img')
const playSong = $('.btn-toggle-play')
const player = $('.play')
const progress = $('.progress')
const volume = $('.volume')
const btnVolumeMute=  $('.player-controls-right-item') 
const btnNext = $('.btn-next-song')
const btnPrev = $('.btn-prev-song')
const iconPrev = $('.icon-backward')
const btnRandom = $('.btn-random-song')
const btnRepeat = $('.btn-repeat-song')
const animationIcon = $('.music__songs-heading-img')
const timeStart = $('.player-controls__player-audio-timeStart')
const timeEnd = $('.player-controls__player-audio-timeEnd')
const appHeader = $('.app__header')
const appcontent = $('.app__content')
const musicTitleLists = $$('.music__title-list')
const bodyMusicPane = $$('.body__music-pane')
const ActiveMusicTitleLists=$('.music__title-list.active_item-music')
const titleLine = $('.music__title-line')
const modalBodyIconclose=  $('.modal__body-iconClose')
const aciveModal = $('.modal')
const closeModal = $('.modal__overlay')
const openModal = $('.header__right-item.open-modal')
const applyLondon = $('.apply-london')
const colorChange =$$('.color-Change')
const headerAndgPlaylist = $('.header-playlist')
const playerOverlay = $('.app_player-overlay')
const app = {
    saveRandom:[],
    currentIndex:0,
    isPlaying:false,
    isPlaylist: false,
    isRandom:false,
    config:JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    isRepeat:false, 
    songs: [
        {
             name: "Vì mẹ anh bắt chia tay",
             singer: "Miu Lê",
             path: "/assets/music/bai1.mp3",
             image: "/assets/img/individual/9d9648688a40aecb85f8b70ebe21e82e.webp",
             timeEnd:'04:22',
             isHeart:false
        },
        {
            name: "Ngôi Sao Cô Đơn",
            singer: "Jack-J97",
            path: "/assets/music/bai2.mp3",
            image: "/assets/img/individual/bai2.webp",
            timeEnd:'04:44',
            isHeart:false
        },
        {
            name: "Dằm Trong Tim",
            singer: "Suni Hạ Linh,TDK",
            path: "/assets/music/bai3.mp3",
            image: "/assets/img/individual/bai3.webp",
            timeEnd:'03:50',
            isHeart:false
        },
        {
            name: "Xích them chút nữa",
            singer: "GREY-D",
            path: "/assets/music/bai4.mp3",
            image: "/assets/img/individual/bai4.webp",
            timeEnd:'03:21'
        },
        {
            name: "Anh sẽ Đón Em",
            singer: "Nguyên, Trang",
            path: "/assets/music/bai5.mp3",
            image: "/assets/img/individual/bai5.webp",
            timeEnd:'03:08'
        },
        {
            name: "Muộn rồi mà sao còn",
            singer: "Sơn tùng M-TP",
            path: "/assets/music/bai6.mp3",
            image: "/assets/img/individual/bai6.webp",
            timeEnd:'04:35'
        },
        {
            name: "Chúng ta của hiện tại",
            singer: "Nghĩa,CM1X",
            path: "/assets/music/bai7.mp3",
            image: "/assets/img/individual/bai7.webp",
            timeEnd:'03:20'
        },  
        {
            name: "Rồi tới luôn",
            singer: "Nal",
            path: "/assets/music/bai8.mp3",
            image: "/assets/img/individual/bai8.webp",
            timeEnd:'05:38'
        },
        {
            name: "Yêu đương khó quá thì chạy về khóc với anh ",
            singer: "ERIK",
            path: "/assets/music/bai9.mp3",
            image: "/assets/img/individual/bai9.webp",
            timeEnd:'03:43'
        },
        {
            name: "Có hẹn Với Thanh Xuân",
            singer: "Suni Hạ Linh",
            path: "/assets/music/bai10.mp3",
            image: "/assets/img/individual/bai10.webp",
            timeEnd:"03:42"
        },
        {
            name: "Em là nhất",
            singer: "kis,Hoàng Kaylee",
            path: "/assets/music/bai11.mp3",
            image: "/assets/img/individual/bai11.webp",
            timeEnd:"03:42"
        },
        {
            name: "Lạc vài trong mơ",
            singer: "SimonC,WUY",
            path: "/assets/music/bai12.mp3",
            image: "/assets/img/individual/bai12.webp",
            timeEnd:"03:42"
        },
        {
            name: "Hai phút hơn",
            singer: "Pháo,CM1X",
            path: "/assets/music/bai13.mp3",
            image: "/assets/img/individual/bai13.webp",
            timeEnd:"03:42"
        },
        {
            name: "Nàng Thơ",
            singer: "Hoàng Dũng ",
            path: "/assets/music/bai14.mp3",
            image: "/assets/img/individual/bai14.webp",
            timeEnd:"03:42"
        },
        {
            name: "See Tình",
            singer: "Hoàng thùy linh",
            path: "/assets/music/bai15.mp3",
            image: "/assets/img/individual/bai15.webp",
            timeEnd:"03:42"
        },
        
      ],
    setConfig:function(key,value){
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
      //   renderSong
    render: function(){
            const listSong = this.songs.map((song,index)=>{
                    return `
                     <li class="body__music-songs-list" data-index = ${index} >
                        <div class="music__songs-heading">
                            <i class="ti-music-alt music__songs-heading-icon" ></i>
                            <i class="far fa-square icon-song-hover music__songs-heading-icon"></i>
                            <div class="music__songs-heading-img">
                                <i class="fas fa-play"></i>
                                <div class="music__songs-heading-animation"> </div>
                                <div class="music__songs-heading-opacity"></div>
                                <img src="${song.image}" alt="">
                            </div>
                            <div class="music__songs-heading-name">
                                <p class="music__heading-name-song">${song.name}</p>
                                <p class="music__heading-name-author">${song.singer}</p>
                            </div>
                        </div>
                        <div class="music__songs-describe" >
                            <p>${song.name} (single)</p>
                        </div>
                    
                        <ul class="music__songs-time-item">
                                <li class="music__songs-time-icon">
                                    <i class="fas fa-heart icon-heart "></i>
                                    <p>${song.timeEnd}</p>
                                </li>
                        </ul>
                     </li>
                    `
            })

            playlist.innerHTML = listSong.join('')
            this.activeSong()
    },
    defineProperties : function(){
        Object.defineProperty(this,'currentSong',{
            get:function(){
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents : function(){
      const a=   $('.music__songs-time-icon.active-btn-icon')
      console.log(a)
        const _this=this
        // xử lý animate controlsThumb
       const controlThumbAnimate= controlThumb.animate([
            {transform: 'rotate(0) scale(1)'},
            {transform: 'rotate(360deg) scale(0)' },
            {transform: 'rotate(1) scale(0)'},
            {transform: 'rotate(0) scale(360deg)' },
        ],{
            duration:7000,
            iterations:Infinity
        })
        controlThumbAnimate.pause()
        // khi xử lý play/pause
        playSong.onclick = function(){
            if(_this.isPlaying){
                audio.pause()
            }
            else{
                audio.play()
                _this.srcollToActiveSong()
            }
        }
            // khi song được play
        audio.onplay = function(){
                _this.isPlaying = true
                player.classList.add('playing')
                controlThumbAnimate.play()
                _this.animationIcon()
        }
            // khi song được pause
        audio.onpause = function(){
                _this.isPlaying = false
                player.classList.remove('playing')
                controlThumbAnimate.pause()
                _this.removeAnimationIcon()
        }
            // tiến độ bài hát
        audio.ontimeupdate = function(e){
          const  currentTime = e.target.currentTime
                if(audio.duration){
                    const progressPerces = Math.floor(audio.currentTime/audio.duration*100)
                    progress.value = progressPerces

                      // currentTime
                      let currentMin= Math.floor(currentTime/60)
                      let currentSec = Math.floor(currentTime%60)
                      if(currentSec<10){
                          currentSec=`0${currentSec}`
                      }
                      if(currentMin<10){
                        currentMin=`0${currentMin}`
                    }
                      timeStart.innerText = `${currentMin}:${currentSec}`
                }
         }
            // tua bài hát 
        progress.oninput = function(e){
                audio.currentTime= e.target.value*audio.duration/100
        }
             // volumne to / nhỏ 
        volume.oninput  = function(e){
                audio.volume=e.target.value/100
                audio.volume == 0 ? btnVolumeMute.classList.add('volume-icon') :btnVolumeMute.classList.remove('volume-icon')
                
        }
            // tiến bài hát
        btnNext.onclick  =function(){
            if(_this.isRandom){
                _this.randomSong()
            }
            else{
                _this.nextSong()
            }
            audio.play()
            _this.activeSong()
            _this.srcollToActiveSong()
        }
            // lùi bài hát
        btnPrev.onclick =function(){
            if(_this.isRandom){
                _this.randomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
            _this.activeSong()
            _this.srcollToActiveSong()
        }
            // random bài hát
        btnRandom.onclick = function(){
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom' , _this.isRandom)
            btnRandom.classList.toggle("active-song",_this.isRandom)   
        }
            // repeat bài hát
        btnRepeat.onclick = function(){
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat' , _this.isRepeat)
            btnRepeat.classList.toggle('active-song', _this.isRepeat)
        }
            // kết thúc bài hát
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }
            else{
                btnNext.click()
            }
        }
            // lắng nghe hành vi khi click vào bài hát
        playlist.onclick = function(e){
            const songNode = e.target.closest('.body__music-songs-list:not(.active-song)')
            const activeSongNode = e.target.closest('.body__music-songs-list.active-song')
            const iconElement = e.target.closest('.music__songs-time-item') 
            const describeNode = e.target.closest('.music__songs-describe')

            if(songNode &&  !iconElement && !describeNode){
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.activeSong()
                audio.play()
            }
            if(_this.isPlaying){
                if(activeSongNode &&  !iconElement && !describeNode){
                    _this.activeSong()
                    audio.pause()
                }
            }
            else{
                if(activeSongNode &&  !iconElement && !describeNode){
                    _this.activeSong()
                    audio.play()
                }
            }
        }
            // close modal
         modalBodyIconclose.onclick = function(){
            aciveModal.classList.remove('active-modal')
        }
            // open modal
         openModal.onclick = function(){
                aciveModal.classList.add('active-modal')
        }

        closeModal.onclick = function(){
            aciveModal.classList.remove('active-modal')
        }
        

    },
    srcollToActiveSong: function(){
            setTimeout(()=>{
                    $('.body__music-songs-list.active-song').scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
            },200)
    },
    loadCurrentSong: function(){
        nameSong.textContent = this.currentSong.name
        singerSong.textContent = this.currentSong.singer
        controlThumb.src = this.currentSong.image
        audio.src = this.currentSong.path
        timeEnd.innerText = this.currentSong.timeEnd
        audio.volume = 0.2
        volume.value = audio.volume*100
    },
    loadConfig: function(){
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
        this.songs.isHeart = this.config.isHeart
    },
    nextSong : function(){
        this.currentIndex++
        if(this.currentIndex>this.songs.length-1){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function(){
        this.currentIndex--
        if(this.currentIndex<0){
                this.currentIndex = this.songs.length-1
        }
        this.loadCurrentSong()
    },
    randomSong: function(){
        let newIndex
      if(this.saveRandom.length === this.songs.length){
            this.saveRandom.length=0
        }
      do{
            newIndex = Math.floor(Math.random() * this.songs.length)
      }while(newIndex === this.currentIndex || this.saveRandom.includes(newIndex))

      this.saveRandom.push(newIndex)
      this.currentIndex = newIndex
      this.loadCurrentSong()
    },
    animationIcon: function(){
        const listSong = $$('.body__music-songs-list')
        listSong.forEach((song,index)=>{
            index===this.currentIndex ? song.classList.add('animationIcon') :song.classList.remove('animationIcon')
        })
    },
    removeAnimationIcon: function(){
        const listSong = $$('.body__music-songs-list')
        listSong[this.currentIndex].classList.remove('animationIcon')
    },
    activeSong: function(){
        const listSong = $$('.body__music-songs-list')
            listSong.forEach((song,index)=>{
                index===this.currentIndex ? song.classList.add('active-song') :song.classList.remove('active-song')
            })
    },
    scrollHeader:function(){
        appcontent.onscroll = function(){
            appHeader.classList.toggle("sticky",appcontent.scrollTop>0)
      }
    },  
    tabSong:function(){
        titleLine.style.left = ActiveMusicTitleLists.offsetLeft + 'px'
        titleLine.style.width = ActiveMusicTitleLists.offsetWidth + 'px'

        musicTitleLists.forEach((list,index)=>{
            const musicPane = bodyMusicPane[index]
                list.onclick =function(){
                    $('.music__title-list.active_item-music').classList.remove('active_item-music')   
                    $('.body__music-pane.active-pane').classList.remove('active-pane')

                    titleLine.style.left = this.offsetLeft + 'px'
                    titleLine.style.width = this.offsetWidth + 'px'

                    musicPane.classList.add('active-pane')
                    this.classList.add('active_item-music')
                }
        })
    },
    activeHeart:function(){
        const _this = this
        const iconBtns = $$('.music__songs-time-icon .icon-heart')
        iconBtns.forEach((iconBtn,index) =>{
            iconBtn.onclick =function(e){
                const iconHeart= e.target.closest('.icon-heart:not(.active-btn-icon)')
                const activIconHeart= e.target.closest('.icon-heart.active-btn-icon')
                   if(iconHeart){
                        const text = 'Bạn có muốn thích bài hát không ??'
                         _this.setConfig('isheart' , !_this.songs[index].isHeart)
                        if(confirm(text)=== true){
                            e.target.classList.add('active-btn-icon')
                        }
                   }
                   if(activIconHeart){
                        const text = 'Bạn có chắn chắn hủy bài hát yêu thích không ??'
                        _this.setConfig('isheart' , _this.songs[index].isHeart)
                         if(confirm(text)=== true){
                            e.target.classList.remove('active-btn-icon')
                        }
                   }
            }
            
        })
        
        
    },
    changeColor: function(){
        applyLondon.onclick = function(e){
            console.log(appName.style)
            appName.style.backgroundImage = "url(/assets/img/background/London-Mid1.jpg)"
            appName.style.backgroundSize = "1920px auto"
            appName.style.backgroundRepeat ="repeat"
            colorChange.forEach(function(a){
                    a.style.backgroundColor= 'var(--blue-primary)'
                    a.style.borderColor= 'var(--blue-primary)'

            })
            headerAndgPlaylist.style.background= 'var(--layout-bg-blue)'
            playerOverlay.style.backgroundColor= 'var(--player-bg-blue)'
            // headerAndgPlaylist.forEach(function(a){
            // })
        }
    },
    start: function(){
        // gán cấu hình config vào ứng dụng
        this.loadConfig()
        //xuất thông tin nhạc
        this.render()
        // Định nghĩa các thuộc tính cho Object
        this.defineProperties()
        // lắng nghe / xử lý các sự kiện
        this.handleEvents()
        // tải thông tin bài hát
        this.loadCurrentSong()
        ///thanh navigate bar
        this.scrollHeader()
        //chuyển 
        this.tabSong()
        //chức năng thả tim
        this.activeHeart()
        this.changeColor()
        btnRandom.classList.toggle("active-song",this.isRandom)
        btnRepeat.classList.toggle('active-song', this.isRepeat)
    }
}
app.start();



    //    <li class="music__songs-time-list">
                                //     <i class="fa-solid fa-compact-disc"></i>
                                // </li>
                                // <li class="music__songs-time-list">
                                //     <i class="fas fa-microphone"></i>
                                // </li>
                                // <li class="music__songs-time-list">
                                //     <i class="fas fa-heart"></i>
                                // </li>
                                // <li class="music__songs-time-list">
                                //     <i class="ti-more-alt"></i>
                                // </li>