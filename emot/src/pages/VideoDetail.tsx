import { useLocation } from "react-router-dom";
import Headers from "../components/Headers";
import YoutubeVideo from "../components/youtube/youtube";



function VideoDetail() {

    const location = useLocation()
    const video = location.state.video
    const emotions = video.EachE
    const participants = video.EachAcc

    console.log("video", video)

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full px-9 py-6 space-y-6">
                <div className="flex w-full items-center">
                    <p className="flex w-full text-h2 font-bold text-black justify-start">{video.VdoName}</p>
                </div>
                <div className="flex-col space-y-4">
                    <div className="flex w-full justify-center">
                        <YoutubeVideo link={video.VdoUrl} playButton={true} />
                    </div>
                    <div className="flex w-full h-fit justify-center px-2">
                        <div className="flex justify-start items-center rounded-l-2xl px-2 bg-secondary">
                            <p className=" text-body">Link</p>
                        </div>
                        <div className="flex w-full rounded-r-2xl px-2 border">
                            <p className=" text-body">{video.VdoUrl}</p>
                        </div>
                    </div>

                </div>
                {emotions ? (
                    <div className="flex-col space-y-5">
                        <div className="flex-col space-y-2">
                            {emotions.map((emotion: any, index: number) => {
                                return (
                                    <div className="flex w-full items-center space-x-5" key={index}>
                                        {/* emoji */}
                                        <div className="flex w-10 h-10">
                                            <img src={require(`../svg/${emotion.EName}.svg`)} alt='emotion.MainE' />
                                        </div>
                                        <p className="flex w-full justify-start text-p">{emotion.EName}</p>
                                        <p className="text-p">{emotion.EPercentage}</p>

                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex-col space-y-2">
                            <p className="text-h3 font-semibold">Participants</p>
                            {participants.map((user: any, index: number) => {
                                return (
                                    <div className="flex w-full items-center space-x-2" key={index}>
                                        <p className="text-p font-semibold">{user.AccName}:</p>
                                        <p className="text-p">{user.Emotion}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ) : null}



            </div>
        </div>
    );

}

export default VideoDetail;