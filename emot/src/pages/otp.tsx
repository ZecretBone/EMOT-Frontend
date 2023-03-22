import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Headers from "../components/Headers";
import NextButton from "../components/buttons/nextButton";

function Otp() {
    const [otp, setOTP] = useState('')

    const navigate = useNavigate();
    const location = useLocation()
    const title = location.state.title
    const user = {
        title: { title },
        videos: []
    }


    function nextButton() {
        navigate(`/${title}`, { state: { user: user } })
    }

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full px-9 py-6 space-y-4">
                <div className="flex w-full items-center">
                    <p className="flex w-full text-h2 font-bold text-black justify-start">Create New User</p>

                </div>
                <div className="flex-col space-y-2">
                    <p className="flex text-h3">Enter OTP</p>
                    <input
                        type="text"
                        className="text-p h-9 w-full border px-2 rounded-md"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOTP(e.target.value)}
                    />
                </div>

                <div className="flex w-full justify-center py-16">
                    <NextButton action={nextButton} />
                </div>



            </div>
        </div>
    )
}

export default Otp;