import { useNavigate } from "react-router-dom";
import Tag from "../tags/Tag";

function FeedCard(props: any) {
    const { id, title, emotions, video } = props

    const navigate = useNavigate();

    function onClickCard() {
        navigate(`/video/${id}`, { state: { video: video } })
    }

    return (
        <button className="flex w-full h-fit p-2 rounded-lg shadow-md" onClick={() => onClickCard()}>
            {/* emotion emoji*/}
            <div className="flex w-10 h-10">

            </div>
            <div className="flex-col w-fit h-fit space-y-1">
                <p className="text-h3 font-medium">{title}</p>
                <div className="flex space-x-2">
                    {emotions.map((emotion: any, index: number) => {
                        return (
                            <div key={index}>
                                <Tag title={emotion.title} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </button>
    )
}

export default FeedCard;