import { useNavigate } from "react-router-dom";

function Headers() {

    const navigate = useNavigate();
    function clickOnIcon() {
        navigate(`/`)
    }
    return (

        <>
            <div className="flex w-full h-24 bg-primary px-10 items-center" >
                <button className="text-h1 font-extrabold text-white" onClick={() => clickOnIcon()}>
                    EMOT
                </button>
            </div>
        </>

    );
}

export default Headers;