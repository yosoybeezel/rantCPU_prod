async function initVideoMobile() {

    const options = {
        id: 898196233,
        responsive: true,
        muted: false,
        loop: false,
        autoplay: false,
        background: 1 // play video without controls  
    };

    videoBackgroundPortrait = new Vimeo.Player('videoBackgroundPortrait', options);

    videoBackgroundPortrait.on('loaded', async () => {
        videoBackgroundPortrait.setVolume(1);
        videoBackgroundPortrait.pause();

        
    });
    
    async function addCuePoint(video, time, customKey) {
        return new Promise((resolve, reject) => {
            video.addCuePoint(time, { customKey })
                .then(resolve)
                .catch(reject);
        });
    }

    try {
        // await addCuePoint(videoBackgroundPortrait, 1, 'intro');
    } catch (error) {

    };

    videoBackgroundPortrait.on('play', async () => {        
    });

    videoBackgroundPortrait.on('cuepoint', async function (obj) {
       
    });

    videoBackgroundPortrait.on('ended', async () => { 

    });

}
