import { useLocation, useNavigate } from "react-router-dom";
import Headers from "../components/Headers";
import NextButton from "../components/buttons/nextButton";

function TabEMOT() {

    const location = useLocation()
    const user = location.state.user
    const newrec = location.state.newrec
    // const socket = location.state.socket
    const navigate = useNavigate();

    console.log("state", location)

    function nextButton() {
        navigate(`/${user.AccName}/recordVideo/${newrec.VdoID}`, { state: { user: user, newrec: newrec } })

    }

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full p-4 space-y-4 mt-10">
                <p className="text-h2 font-bold flex justify-center">
                    Please tab on EMOT
                </p>
                <img className="flex justify-center -ml-4" src={require('../gif/tabEmot.gif')} alt="scanningCard" />
            </div>
            <div className="flex w-full justify-center py-16">
                <NextButton action={nextButton} />
            </div>
        </div>
    );
}

export default TabEMOT;