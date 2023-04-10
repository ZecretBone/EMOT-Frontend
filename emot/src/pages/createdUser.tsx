import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../api/http";
import Headers from "../components/Headers";
import NextButton from "../components/buttons/nextButton";

function CreatedUser() {
    const [username, setUsername] = useState('')
    const [otp, setOTP] = useState('')

    const navigate = useNavigate();
    const request = useHttp()

    const user = {
        otp: '309092',
        title: { username },
        videos: []
    }

    function nextButton() {
        const newUser = {
            Otp: otp,
            AccName: username
        }
        request.Post('/back-emot/register/web', newUser).then((res) => {
            console.log('newUser', newUser)
            console.log('res', res)
            if (res){
                navigate(`/verifyWithEMOT`, { state: { user: res.data } })
            }
        })

    }

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full px-9 py-6 space-y-4">
                <div className="flex w-full items-center">
                    <p className="flex w-full text-h2 font-bold text-black justify-start">Create New User</p>

                </div>
                <div className="flex-col space-y-2">
                    <p className="flex text-h3">Enter your username</p>
                    <input
                        type="text"
                        className="text-p h-9 w-full border px-2 rounded-md"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
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

export default CreatedUser;