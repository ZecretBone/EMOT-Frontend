import YouTube, { YouTubeProps } from "react-youtube";


function YoutubeVideo(props: any) {

    let { link, playButton, onReadyPlayer2, onPlayerEnd } = props;
    let id: string = '0'
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    console.log(link)
    if (link) {
        const linkArray = link.split("/watch?v=")
        id = (linkArray.slice(-1)).toString()
        console.log('link', id)
    }

    // const linkArray2 = linkArray.split("be/")

    const opts: YouTubeProps['opts'] = {
        height: '180',
        width: '320',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,
            disablekb: 1
        },
    };

    if (playButton) {
        return <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />;
    } else {
        return <YouTube videoId={id} opts={opts} onReady={onReadyPlayer2} onEnd={onPlayerEnd} style={{ pointerEvents: "none", }} />;
    }

}
export default YoutubeVideo;

