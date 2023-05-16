import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHttp } from "../api/http";
import Headers from "../components/Headers";

function ScanPage() {

    const [count, setCount] = useState(0)
    // const [status, setStatus] = useState(false)

    const request = useHttp()
    const location = useLocation()
    const newUser = location.state.user
    const navigate = useNavigate();


    useEffect(() => {
        const timeout = setTimeout(() => {
            setCount(count + 1);
            request.Post('/back-emot/register/wvalidate', newUser).then((res: any) => {
                console.log('data', res.data)
                if (res.data.Status === true) {
                    navigate(`/${newUser.AccName}`, { state: { user: newUser } })
                }

            })
        }, 3000);


    }, [count])

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full p-4 space-y-4 mt-10">
                <p className="text-h2 font-bold  flex justify-center">
                    Please scan the card
                </p>
                <img className="flex justify-center ml-6" src={require('../gif/scanningCard.gif')} alt="scanningCard" />
            </div>
        </div>
    );
}

export default ScanPage;