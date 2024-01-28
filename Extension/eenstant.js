const PORT = 14234

const getPlayingDetails = () => {
    return musicDetails = {
        musicAuthor : document.querySelector("body .byline.style-scope.ytmusic-player-bar.complex-string")
            .children[0].innerHTML || null,
        musicLink : window.location.href || null,
        musicTitle : document.querySelector("body .title.style-scope.ytmusic-player-bar").innerHTML || null,
        musicThumbnail : document.querySelector("body .image.style-scope.ytmusic-player-bar").getAttribute('src') || null,
        musicTime : document.querySelector("body .time-info.style-scope.ytmusic-player-bar").innerHTML.replace(/\s/g, '') || null
    }
}

const loopbackPost = async (musicData) => {
    const response = await fetch(`http://localhost:${PORT}`, {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(musicData), 
      });
    return response.json(); 
}



setInterval(()=>{
    const musicDetails = getPlayingDetails();
    console.log(loopbackPost(musicDetails));
}, 1000);
