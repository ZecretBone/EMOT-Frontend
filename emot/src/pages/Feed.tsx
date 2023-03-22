import { useLocation } from "react-router-dom";
import Headers from "../components/Headers";
import AddButton from "../components/buttons/addButton";
import FeedCard from "../components/cards/feedCard";

function Feed() {

    const location = useLocation()
    const user = location.state.user
    const videos = user.videos

    // console.log('videos', videos)

    function addVideo() {

    }

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full px-9 py-6 space-y-4">
                <div className="flex w-full items-center">
                    <p className="flex w-full text-h2 font-bold text-black justify-start">Feed</p>
                    <div className="flex w-full justify-end">
                        <AddButton action={addVideo} />
                    </div>
                </div>
                {videos ? (
                    <div className="flex-col space-y-2">
                        {videos.map((video: any, index: number) => {
                            return (
                                <div key={index}>
                                    <FeedCard id={video.id} video={video} title={video.title} emotions={video.emotions} />
                                </div>
                            )
                        })}
                    </div>) : null}
            </div>
        </div>
    );
}

export default Feed;