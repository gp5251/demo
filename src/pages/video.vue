<template>
    <div class="videoDemo" @mouseenter="mouseenter" @mouseleave="mouseleave" :style="{'width':videoW+'px','height':videoH+'px'}" ref="parentWrap">
       
        <div>
            <video class="video" preload ref="video" @dblclick="toggleFullScreen"
            poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6rUUUaRZ4L0-vghdGpmKcrABj8gfF1t4HG4yWMX1997jTMdlHg">
                <source :src="url" type="video/mp4" />
            </video>
        </div>
        <!-- 播放/暂停按钮 -->
        <!-- <transition name="play">
            <span class="play" ref="play" v-show="playShow" @click="play">play</span>
        </transition> -->
        <transition name="controlBar">
            <div class="controlBar">
                <!-- 播放/暂停按钮 -->
                <span class="playBtn" @click="play" ref="playBtn">&gt;</span>
                <!-- 音量 -->
                <span class="volWrap" ref="volWrap">
                    <span class="icon" @click="muted"></span>
                   <div class="wrap" ref="lineWrap">
                        <span class="line" ref="volume" :style="{'width':volumeWidth*volume+'px'}"></span>
                        <span class="line2" @mousedown="mousedown('volume',$event)" ref="volume2" ></span>
                   </div>
                </span>
                <!-- 目前播放时间 -->
                <span class="curTime">{{formateTime(currentTime)}}</span>
                <!-- 进度条 -->
                <span class="progressBarWrap">
                    <div class="wrap">
                        <div class="line" ref="progress" :style="{'width':progressWidth*progress+'px'}"></div>
                        <div class="line2" @mousedown="mousedown('progress',$event)" ref="progress2"></div>
                    </div>
                </span>
                <!-- 总时长 -->
                <span class="totalTime">{{formateTime(totalTime)}}</span>
                <!-- 全屏 -->
                <span class="fullScreen" @click="toggleFullScreen">
                    [&nbsp;&nbsp;]
                </span>
            </div>
        </transition>
    </div>
</template>

<script>
import JudgeBrower from "@/utils/judgeBrower"
let video = {};
const maxWidth = 640;

export default {
    name: "videoDemo",
    data() {
        return {
            playShow: true,
            isFullScreen: false,
            widAndHei: {},
            videoW: 640,
            videoH: 480,
            screenWAndH: {},
            middleStyle: {},
            volume: 1,
            preVol: 1,
            volumeWidth: 75,
            progressWidth: 350,
            progress: 0,
            currentTime: 0,
            totalTime: 0,
            isend: false
        }
    },
    computed: {
      
    },
    props: {
        
        width: {
            type: Number,
            default: 640
        },
        height: {
            type: Number,
            default: 480
        },
        url: {
            type: String,
            default: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        }
       
    },
    methods: {
        toggleFullScreen () {
            if( !this.isFullScreen ) {
                 // 全屏下时按下esc键会被浏览器屏蔽， 所以用此方法处理按下esc键的情况
                
                window.onresize = () => {
                    if ( this.isFullScreen ) {
                        this.exitFullScreen();
                        this.isFullScreen = false;
                    }
                }
                    
                this.enterFullScreen();
                // 延迟设置，防止onresize立即执行
                setTimeout(() => {
                    this.isFullScreen = true;
                }, 200);
            } else {
                window.onresize = null;
                this.exitFullScreen();
                this.isFullScreen = false;
            }
           
        },
        setPlayInterVal () {
            video.curTimeTimer = setInterval(() => {
                this.currentTime = Math.round(video.currentTime);
                this.progress = this.currentTime / this.totalTime;
            },1000);
        },
        play () {
           
            if ( video.paused ) {
                video.play();
               
                this.isend = false;

                // this.$refs.play.innerText = "pause";
                this.$refs.playBtn.innerHTML = "| |";
                this.setPlayInterVal();
            } 
            // 虽然 video.ended 在播放完后为true 但是就是不进这个判断
            // console.log(video.ended);
            // else if (video.ended) {
            //     console.log("ended");
            //     video.currentTime = 0;
            //     video.play();
            //     this.$refs.playBtn.innerHTML = "| |";
            //     this.isend = false;
            //     console.log("video.ended")
            //     this.setPlayInterVal();
            // } 
            else {
                
                video.pause();
                // this.$refs.play.innerText = "play";
                this.$refs.playBtn.innerHTML = "&gt;";
                clearInterval(video.curTimeTimer);
            } 
        },
        mouseenter (event) {
            clearTimeout(video.outTimer);
            this.playShow = true;
        },  
        mouseleave (event) {
            video.outTimer = setTimeout(() => {
                this.playShow = false;
            },1000)
        },
       
        enterFullScreen () {
           
            if (video.requestFullscreen) {
                // video.requestFullscreen();
                this.$refs.parentWrap.requestFullscreen();
            }
            //FireFox
            else if (video.mozRequestFullScreen) {
                // video.mozRequestFullScreen();
                this.$refs.parentWrap.mozRequestFullScreen();
            }
            //Chrome等
            else if (video.webkitRequestFullScreen) {
                // video.webkitRequestFullScreen();
                this.$refs.parentWrap.webkitRequestFullScreen();
            }
             //IE11
            else if (video.msRequestFullscreen) {
                // video.msRequestFullscreen();
                this.$refs.parentWrap.msRequestFullscreen();
            } 
            // else {
            //     this.videoW = this.screenWAndH.width;
            //     this.videoH = this.screenWAndH.height;
            // }

            this.videoW = this.screenWAndH.width;
            this.videoH = this.screenWAndH.height;

            
        },
        exitFullScreen () {
            
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } 
            // else {
            //     this.videoW = this.widAndHei.width
            //     this.videoH = this.widAndHei.height
            // }

            this.videoW = this.widAndHei.width
            this.videoH = this.widAndHei.height

        },
        muted () {
            if(this.volume) {
                this.preVol = this.volume;
                this.volume = 0;
            } else {
                this.volume = this.preVol;
            }
        },
        getStyle(obj,attr) {
            const result =  getComputedStyle ? getComputedStyle(obj)[attr] : obj.currentStyle[attr];
            return parseInt(result);
        },
        mousedown (type, event) {
          
            const dom = event.target;
            dom.type = type;
            dom.disX = dom.getBoundingClientRect().left;
            dom.mx = event.clientX;
           
            dom.onmousemove = this.mousemove;
            dom.onmouseup = this.mouseup;
            dom.onmouseout = this.mouseout;

            event.preventDefault();
            return false;
        },
        mousemove (event) {
            const dom = event.target;
            dom.mx = event.clientX;

            this.toggleBar(dom);
            
            event.preventDefault();
            return false;
        },
        mouseup (event) {
            const dom = event.target;

            this.toggleBar(dom);
            this.currentTime = video.currentTime;
            
            dom.onmousemove = null;
            dom.onmouseup = null;
            dom.onmouseout = null;

            if (this.isend) {
                this.$refs.playBtn.innerHTML = "&gt;";
                this.isend = false;
            }
        },
         mouseout (event) {
            const dom = event.target;

            // this.toggleBar(dom);
            // this.currentTime = video.currentTime;
            
            dom.onmousemove = null;
            dom.onmouseup = null;
            dom.onmouseout = null;
        },
        toggleBar (dom) {
            let width = dom.mx - dom.disX;

            if (dom.type === 'volume') {
                if(width > this.volumeWidth) {
                    width = this.volumeWidth;
                } else if (width < 0) {
                    width = 0;
                } else {
                    width = dom.mx - dom.disX;
                }
                video.volume = width / this.volumeWidth;
                this.volume = video.volume;
            } else if (dom.type === 'progress') {
                if(width > this.progressWidth) {
                    width = this.progressWidth;
                } else if (width < 0) {
                    width = 0;
                } else {
                    width = dom.mx - dom.disX;
                }
                
                this.progress = width / this.progressWidth;
                video.currentTime = this.progress * this.totalTime;
            }

        },
        transfer (value) {
            value += "";
            if (value.length < 2) {
                value = "0" + value;
                return value;
            } else {
                return value;
            }
        },
        formateTime (time) {
            const hour = this.transfer(Math.floor(time / 3600));
            const minute = this.transfer(Math.floor((time % 3600) / 60));
            const second = this.transfer(Math.round(time % 60));
            return `${hour}:${minute}:${second}`
        }
    },
    mounted() {
        
       this.$nextTick ( () => {
            video = this.$refs.video;
            // 当获取到视频长度时
            video.addEventListener("loadedmetadata", () => {
               
                if (video.videoWidth > maxWidth) {
                     this.videoW = maxWidth;
                     this.videoH = maxWidth / video.videoWidth * video.videoHeight;
                } else {
                    this.videoW = video.videoWidth;
                    this.videoH = video.videoHeight;
                }

                this.totalTime = video.duration;
                this.currentTime = Math.round(video.currentTime);
                
                
                this.volume = video.volume;
                this.volumeWidth = this.getStyle(this.$refs.volume2, "width");
                this.progressWidth = this.getStyle(this.$refs.progress2, "width");
               
                
                this.widAndHei.width =  this.videoW;
                this.widAndHei.height = this.videoH;

                const browerVer = JudgeBrower();
                
                if( browerVer.indexOf("IE") >= 0 && parseInt(browerVer.slice(2)) <= 10 ) {
                    this.screenWAndH.width = document.documentElement.clientWidth;
                    this.screenWAndH.height = document.documentElement.clientHeight;
                   
                } else {
                    this.screenWAndH.width = window.screen.width;
                    this.screenWAndH.height = window.screen.height;
                }
                

            });
            // 当播放完时
            video.addEventListener("ended", () => {
               
                this.isend = true;
                this.$refs.playBtn.innerHTML = "O";
                clearInterval(video.curTimeTimer);
            });
            
            

       } )
    }
}
</script>

<style lang="scss" scoped>
// 消除全屏下的控制条
// video::-webkit-media-controls,
// video::-moz-media-controls,
// video::-webkit-media-controls-enclosure{
//     display:none !important;
// }

// video::-webkit-media-controls-panel,
// video::-webkit-media-controls-panel-container,
// video::-webkit-media-controls-start-playback-button {
//     display:none !important;
//     -webkit-appearance: none;
// }

// pseudo="-internal-media-controls-overlay-play-button-internal" 原生居中的播放按钮
// pseudo="-internal-media-controls-button-panel"   原生底部控制条
// pseudo="-internal-media-controls-segmented-track" 原生进度条
// [pseudo] {
//     display: none !important;
// }

audio::-webkit-media-controls,
video::-webkit-media-controls {
    display: none !important;
}

.videoDemo {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // z-index: 21474836470 !important;

    .video {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        // z-index: 99 !important;

        // &:-webkit-full-screen {
        //     z-index: 99 !important;
        // }
    }

    .play {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: #fff;
        line-height: 50px;
        text-align: center;
        font-size: 30px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #ccc;
        cursor: pointer;
    }

    .controlBar {
        position: absolute;
        bottom: 0;
        left: 0;
        // z-index: 21474836470 !important;
        width: 100%;
        height: 50px;
        font-size: 0;
        background: rgba($color: #ccc, $alpha: 0.5);
        // &:-webkit-full-screen {
        //     // z-index: 21474836470 !important;
        // }
        & > span {
            display: inline-block;
            height: 50px;
            line-height: 50px;
            vertical-align: middle;
        }
        .playBtn {
            width: 50px;
            text-align: center;
            font-size: 20px;
            cursor: pointer;
        }

        .volWrap {
            width: 100px;
            height: 50px;
            position: relative;
            // line-height: 1;
            .wrap {
                position: absolute;
                left: 20px;
                top: 50%;
                transform: translateY(-50%);
                // display: inline-block;
                width: 75px;
                height: 5px;
                border-radius: 2.5px;
                background-color: rgba($color: #ccc, $alpha: 0.75);
                z-index: 8;
            }

            .line,
            .line2 {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 5px;
                border-radius: 2.5px;
            }
            .line {
                background-color: #fff;
                z-index: 9;
            }
            .line2 {
                background-color: transparent;
                z-index: 10;
            }

            .icon {
                display: inline-block;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: #fff;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        .curTime,
        .totalTime,
        .fullScreen {
            font-size: 12px;
            color: #666;
            width: 50px;
            text-align: center;
        
        }

        .progressBarWrap {
            width: 350px;
            position: relative;
            .wrap {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 350px;
                height: 5px;
                border-radius: 2.5px;
                background-color: rgba($color: #ccc, $alpha: 0.75);
                z-index: 8;

                .line,
                .line2 {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 5px;
                    border-radius: 2.5px;
                }
                 .line {
                    background-color: #fff;
                    z-index: 9;
                }
                .line2 {
                    background-color: transparent;
                    z-index: 10;
                }
            }
        }

        .fullScreen {
            width: 30px;
            cursor: pointer;
        }
    }
}

.play-enter,
.play-leave-to,
.controlBar-enter,
.controlBar-leave-to {
    opacity: 0;
}

.play-enter-active,
.play-leave-active,
.controlBar-enter-active,
.controlBar-leave-active {
    transition: 1s;
}
</style>
