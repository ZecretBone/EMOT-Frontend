import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { YouTubeProps } from "react-youtube";

import withSocket from "../api/websocket";
import Headers from "../components/Headers";
import YoutubeVideo from "../components/youtube/youtube";
import { Props } from "./scanPagenewrec";

function PlayingVideo({ socket, ...props }: Props) {


    const navigate = useNavigate()
    const location = useLocation()
    const user = location.state.user
    const video = location.state.newrec

    const [eventCon, setEventCon]: any = useState()

    const onReadyPlayer2: YouTubeProps['onReady'] = (event) => {
        setEventCon(event.target)
    }

    const onPlayerEnd: YouTubeProps['onEnd'] = () => {
        socket.send("dtrack")

    }

    function playVideo() {
        eventCon.playVideo()
        socket.send("strack")
    }

    function pauseVideo() {
        eventCon.pauseVideo()
        socket.send("ptrack")
    }

    // useEffect(() => {
    //     if (socket) {
    //         console.log("1")
    //         socket.onmessage = (event: any) => {
    //             console.log("2")
    //             console.log('Received message:', event.data);
    //             if (event.data === "alldone") {
    //                 console.log("4")
    //                 socket.send("alldone")
    //                 navigate(`/${user.AccName}/video/${video.VdoID}`, { state: { video: video } })

    //             }
    //             console.log("5")
    //         }
    //     }

    // }, [navigate, socket, user.AccName, video])

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full px-9 py-6 space-y-6">
                <div className="flex w-full items-center">
                    <p className="flex w-full text-h2 font-bold text-black justify-start">{video.VdoName}</p>
                </div>
                <div className="flex-col space-y-6">
                    <div className="flex w-full justify-center">
                        <YoutubeVideo link={video.VdoUrl} playButton={false} onReadyPlayer2={onReadyPlayer2} onPlayerEnd={onPlayerEnd} />
                    </div>
                    <div className="flex w-full space-x-5 items-center justify-center">
                        <button className="flex w-fit h-fit rounded-3xl bg-red  items-center justify-center" onClick={() => pauseVideo()}>
                            <p className="text-h3 font-bold text-white px-4 py-1">pause</p>
                        </button>
                        <button className="flex w-fit h-fit rounded-3xl bg-green items-center justify-center" onClick={() => playVideo()}>
                            <p className="text-h3 font-bold text-white px-4 py-1">play</p>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default withSocket(PlayingVideo);