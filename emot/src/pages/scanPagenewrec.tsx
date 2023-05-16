import withSocket from "../api/websocket";
import Headers from "../components/Headers";


export interface Props {
    socket: WebSocket,
}

function ScanPagenewrec({ socket, ...props }: Props) {


    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full p-4 space-y-4 mt-10">
                <p className="text-h2 font-bold flex justify-center">
                    Please scan the card
                </p>
                <img className="flex justify-center ml-6" src={require('../gif/scanningCard.gif')} alt="scanningCard" />
            </div>
        </div>
    )
}

export default withSocket(ScanPagenewrec)