import { useLocation } from "react-router-dom";
import Headers from "../components/Headers";
import YoutubeVideo from "../components/youtube/youtube";



function VideoDetail() {

    const location = useLocation()
    const video = location.state.video
    const emotions = video.emotions

    console.log("video", video)

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full px-9 py-6 space-y-6">
                <div className="flex w-full items-center">
                    <p className="flex w-full text-h2 font-bold text-black justify-start">{video.title}</p>
                </div>
                <div className="flex-col space-y-4">
                    <div className="flex w-full justify-center">
                        <YoutubeVideo link={video.link} />
                    </div>
                    <div className="flex w-full h-fit justify-center px-2">
                        <div className="flex justify-start rounded-l-2xl px-2 bg-secondary">
                            <p className=" text-body  ">Link</p>
                        </div>
                        <div className="flex w-full rounded-r-2xl px-2 border">
                            <p className=" text-body">{video.link}</p>
                        </div>
                    </div>

                </div>
                {emotions ? (
                    <div className="flex-col space-y-2">
                        {emotions.map((emotion: any, index: number) => {
                            return (
                                <div className="flex w-full" key={index}>
                                    {/* emoji */}
                                    <p className="flex w-full justify-start text-p">{emotion.title}</p>
                                    <p className="text-p">{emotion.percent}</p>

                                </div>
                            );
                        })}
                    </div>
                ) : null}



            </div>
        </div>
    );

}

export default VideoDetail;