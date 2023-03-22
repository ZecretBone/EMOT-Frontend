import YouTube, { YouTubeProps } from "react-youtube";

function YoutubeVideo(props: any) {

    const { link } = props;
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const linkArray = link.split("/")
    let id = linkArray.slice(-1)
    console.log('link', id)
    const opts: YouTubeProps['opts'] = {
        height: '152',
        width: '274',
        // playerVars: {
        //     // https://developers.google.com/youtube/player_parameters
        //     autoplay: 1,
        // },
    };

    return <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />;
}
export default YoutubeVideo;