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
            <div className="flex items-center justify-center w-full h-full py-10">
                <p className="text-h2 font-bold text-white py-2 px-6">
                    Please scan the card
                </p>
            </div>
        </div>
    );
}

export default ScanPage;