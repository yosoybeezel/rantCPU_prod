const rantBytesContainer = document.getElementById('rantBytesContainer');
let rantBytesVideo;

const rantBytesArray = [
    882554359,
    882554286,
    882554202,
    882278928,
    882554009,
    882554092,
    882553901,
    882553795,
    882553735,
    882553658,
    882553573
];

async function rantBytes() {

    const randomIndex = Math.floor(Math.random() * rantBytesArray.length);
    const randomRantByte = rantBytesArray[randomIndex];

    let optionsRantbytes = {
        id: randomRantByte,
        responsive: true,
        loop: false,
        autoplay: 1,
        muted:true
    }

    rantBytesVideo = new Vimeo.Player('rantBytesPlayer', optionsRantbytes);

    rantBytesVideo.on('loaded', function(){
        console.log('rantbyte loaded');
        rantBytesContainer.classList.add('visible');
        rantBytesContainer.classList.remove('hide');
        rantBytesVideo.setVolume(1);
        rantBytesPlayer.style.transform = 'scaleY(1)';
        rantBytesVideo.play();

    });


    rantBytesVideo.on('play', function(){


    });

    rantBytesVideo.on('ended', async ()=> {
        rantBytesPlayer.style.transform = 'scaleY(0)';
        blockElements(false);
        setTimeout(async()=>{
            rantBytesContainer.classList.remove('visible');

            rantBytesVideo.destroy();
        },300);

    });
}
