import { useNavigate } from "react-router-dom";


function NamedCard(props: any) {
    const { title, user } = props

    const navigate = useNavigate();

    // console.log('videos', videos)

    function onClickCard() {
        navigate(`/${title}`, { state: { user: user } })
    }


    return (
        <button className="flex w-full h-fit p-2 rounded-lg bg-secondary" onClick={() => onClickCard()}>
            <p className="px-2 text-h3 font-medium">{title}</p>
        </button>
    )

}
export default NamedCard;