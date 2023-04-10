import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../api/http";
import Headers from "../components/Headers";
import AddButton from "../components/buttons/addButton";
import NamedCard from "../components/cards/namedCard";

function User() {

    // const users = [
    //     {
    //         title: 'Ryu',
    //         videos: [
    //             {
    //                 id: '1',
    //                 title: 'โฆษณาไทยประกันชีวิต #1',
    //                 link: 'https://youtu.be/uaWA2GbcnJU',
    //                 emotions: [{ title: 'sad', percent: '73%' }, { title: 'happy', percent: '27%' }]
    //             },
    //             {
    //                 id: '2',
    //                 title: 'cat eating',
    //                 link: 'https://youtu.be/HvaQw77UQcw',
    //                 emotions: [{ title: 'happy', percent: '100%' }]
    //             }
    //         ]
    //     },
    //     {
    //         title: 'Yf',
    //         videos: []
    //     }
    // ]

    const [users, setUsers] = useState([]);

    const request = useHttp()
    const navigate = useNavigate();
    function addUser() {

        navigate(`/createdNewUser`)
    }

    useEffect(() => {
        request.Get(`/back-emot/api/accounts`, {}).then((res: any) => {
            if (res.data) {
                setUsers(res.data)
                // console.log(res.data)
            }
        })
    }, [])

    return (
        <div className="flex-col w-full h-full">
            <Headers />
            <div className="flex-col w-full h-full px-9 py-6 space-y-4">
                <div className="flex w-full items-center">
                    <p className="flex w-full text-h2 font-bold text-black justify-start">Select User</p>
                    <div className="flex w-full justify-end">
                        <AddButton action={addUser} />
                    </div>
                </div>
                <div className="flex-col space-y-2">
                    {users ? (
                        <>
                            {users.map((user: any, index: number) => {
                                return (
                                    <div key={index}>
                                        <NamedCard title={user.AccName} user={user} />
                                    </div>
                                );
                            })}
                        </>
                    ) : null}


                </div>


            </div>
        </div>
    );
}

export default User;