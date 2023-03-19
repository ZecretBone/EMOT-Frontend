import Headers from "../components/Headers";
import AddButton from "../components/buttons/addButton";
import FeedCard from "../components/cards/feedCard";

function Feed() {

    function addVideo() {

    }

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full px-9 py-6 space-y-4">
                <div className="flex w-full items-center">
                    <p className="flex w-full text-h2 font-bold text-black justify-start">Feed</p>
                    <div className="flex w-full justify-end">
                        <AddButton props={addVideo} />
                    </div>
                </div>
                <div>
                    <FeedCard/>
                </div>


            </div>
        </div>
    );
}

export default Feed;