import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHttp } from "../api/http";
import Headers from "../components/Headers";
import AddButton from "../components/buttons/addButton";
import FeedCard from "../components/cards/feedCard";

function Feed() {

    const request = useHttp()
    const location = useLocation()
    const user = location.state.user
    const navigate = useNavigate()
    const [videos, setVideos] = useState([])
    // const [count, setCount] = useState(0)


    function addVideo() {
        navigate(`/${user.AccName}/recordVideo`, { state: { user: user } })
    }

    useEffect(() => {
        request.Get(`/back-emot/api/dashboard`, {}).then((res: any) => {
            if (res.data.AllSum) {
                setVideos(res.data.AllSum)
                console.log("videos", videos)
                // console.log("videos2", res.data.AllSum)
            }

        })

    }, [videos])

    // useEffect(() => {
    //     // const timeout = setTimeout(() => {
    //     // setCount(count + 1);
    //     console.log("videos", videos, count)
    //     // }, 3000);
    // }, [count])

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
                <div className="flex-col space-y-2">
                    {videos ? (<>
                        {videos.map((video: any, index: number) => {
                            return (

                                <div key={index}>
                                    <FeedCard id={video.VdoID} video={video} title={video.VdoName} emotions={video.EachE} />
                                </div>
                            )
                        })}
                    </>) : null}
                </div>
            </div>
        </div>
    );
}

export default Feed;