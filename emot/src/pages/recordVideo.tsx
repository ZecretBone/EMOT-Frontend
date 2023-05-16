import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHttp } from "../api/http";
import Headers from "../components/Headers";
import NextButton from "../components/buttons/nextButton";

function RecordVideo() {

    //existing video
    const [eVChecked, setEV] = useState(false)
    //new video
    const [nVChecked, setNV] = useState(true)
    const [title, setTitle] = useState('')
    const [url, setURL] = useState('')
    const [open, setOpen] = useState(false)
    const [selectedV, setSelectedV] = useState({ VdoName: 'Select video', VdoID: 0, VdoUrl: '' })
    const [videos, setVideos] = useState([])

    const location = useLocation()
    const user = location.state.user
    const request = useHttp()
    const navigate = useNavigate()

    function onCheckExistingVideo() {
        setEV(true)
        setNV(false)

        const accId = {
            AccID: user.AccID
        }

        request.Post(`/back-emot/api/existvdo`, accId).then((res: any) => {
            console.log('videos', res.data)
            setVideos(res.data)
        })
    }

    function onCheckNewVideo() {
        setNV(true)
        setEV(false)
    }

    function nextButton() {
        const newrec = {
            AccID: user.AccID,
            VdoID: eVChecked ? selectedV.VdoID : -1,
            VdoName: eVChecked ? selectedV.VdoName : title,
            VdoUrl: eVChecked ? selectedV.VdoUrl : url
        }
        console.log("newrec", newrec)
        request.Post('/back-emot/rec/wnewrec', newrec).then((res: any) => {
            console.log('data', res.data)
            if (res) {
                navigate(`/${user.AccName}/recordVideo/verifyWithEMOT`, { state: { user: user, newrec: res.data } })
            }


        })


    }

    function dropDown() {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }

    }

    function selectedVideo(video: any) {
        setSelectedV(video)
    }

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full px-9 py-6 space-y-4">
                <div className="flex w-full items-center">
                    <p className="flex w-full text-h2 font-bold text-black justify-start">Create New Record</p>
                </div>
                <div className="flex-col w-full h-full">
                    <div className="flex w-full">
                        <button className="flex w-1/2 justify-center border rounded-tl-md text-h3 focus:bg-secondary" onClick={() => onCheckNewVideo()}>
                            <p className="font-bold">New Video</p>
                        </button>
                        <button className="flex w-1/2 justify-center text-h3 border rounded-tr-md focus:bg-secondary" onClick={() => onCheckExistingVideo()}>
                            <p className="font-bold">Existing Video</p>
                        </button>
                    </div>
                    <div className="flex-col space-y-2 w-full h-full border">
                        {nVChecked ? (
                            //new video
                            <div className="flex-col px-5 py-8 space-y-8">
                                <div className="flex-col space-y-2">
                                    <p className="flex text-h3">Video Title</p>
                                    <input
                                        type="text"
                                        className="text-p h-9 w-full border px-2 rounded-md"
                                        placeholder="video title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="flex-col space-y-2">
                                    <p className="flex text-h3">URL</p>
                                    <input
                                        type="text"
                                        className="text-p h-9 w-full border px-2 rounded-md"
                                        placeholder="url"
                                        value={url}
                                        onChange={(e) => setURL(e.target.value)}
                                    />
                                </div>
                            </div>
                        ) : (
                            //existing video
                            <div className="flex-col px-5 py-8 space-y-8">
                                <div className="flex-col space-y-2">
                                    <p className="flex text-h3">Video Title</p>
                                    <div>
                                        <button className="flex w-full border rounded-md items-center px-2" onClick={() => dropDown()}>
                                            <div className="w-full flex justify-start">
                                                <p className="text-p px-2 py-1">{selectedV.VdoName}</p>
                                            </div>
                                            <div className="flex justify-end w-6 h-6">
                                                {open ? (
                                                    <img src={require('../svg/arrow-up.svg').default} alt="arrow-up" />
                                                ) : (
                                                    <img src={require('../svg/arrow-down.svg').default} alt="arrow-down" />
                                                )}

                                            </div>
                                        </button>
                                        {open ? (
                                            <ul className="flex-col w-full border rounded-md items-center px-4 py-1">
                                                {videos.map((video: any, index: number) => {
                                                    return (
                                                        <li key={index} className="flex w-full">
                                                            <button onClick={() => selectedVideo(video)}>{video.VdoName}</button>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        ) : null}

                                    </div>
                                </div>

                            </div>
                        )}

                        <div className="flex w-full justify-center py-16">
                            <NextButton action={nextButton} />
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default RecordVideo;