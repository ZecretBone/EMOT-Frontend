import Tag from "../tags/Tag";

function FeedCard(){
    // props:any
    // const {title} = props

    const emotions = ['sad', 'happy']
    console.log("emotions", emotions)

    return(
        <>
            <div className="flex w-full h-fit p-2">
                {/* emotion emoji*/}
                <div className="flex w-10 h-10">
                    
                </div>
                <div className="flex-col w-fit h-fit">
                    <p className="text-h3 font-medium">qqqqq</p>
                    <>
                        {emotions.map((emotion:string, index:number) => {
                            return (
                                <div key={index}>
                                    <Tag title={emotion}/>
                                </div>
                            )
                        })}
                    </>

                </div>
            </div>
        </>
    )
}

export default FeedCard;