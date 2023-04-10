import Headers from "../components/Headers";

function ScanPagenewrec() {
    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex items-center justify-center w-full h-full py-10">
                <p className="text-h2 font-bold text-white py-2 px-6">
                    Please scan the card
                </p>
            </div>
        </div>
    )
}

export default ScanPagenewrec;