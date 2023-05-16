import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function withSocket(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        const serverUrl = 'wss://emot.chokporn.one/back-emot/ws/wsync';
        const W3CWebSocket = require('websocket').w3cwebsocket;

        const location = useLocation()
        const user = location.state.user
        const newrec = location.state.newrec
        const video = location.state.video

        const [socket, setSocket] = useState(null);
        const [connected, setConnected] = useState(false);

        useEffect(() => {
            const newSocket = new W3CWebSocket(serverUrl);

            // Handle connection open
            newSocket.onopen = () => {
                console.log('WebSocket connected');
                newSocket.send("first");
                const timeout = setTimeout(() => {
                    newSocket.send("wait");
                }, 10000);
                setConnected(true);
            };

            // Handle connection close
            newSocket.onclose = () => {
                console.log('WebSocket disconnected');
                setConnected(false);
            };

            // Handle message received
            newSocket.onmessage = (event) => {
                console.log('Received message:', event.data);
                if (event.data === "connection_detail") {
                    newSocket.send(JSON.stringify(newrec));
                } else if (event.data === "standby") {
                    newSocket.send("assign");
                    navigate(`/${user.AccName}/recordVideo/tabEMOT`, { state: { user: user, newrec: newrec } });
                } else if (event.data === "alldone") {
                    newSocket.send("alldone")
                    navigate(`/${user.AccName}`, { state: {user: user}})
                }
            };

            setSocket(newSocket);

            return () => {
                if (connected) {
                    socket.close();
                }
            };
        }, [serverUrl, user, newrec, navigate]);

        return <Component socket={socket} {...props} />;
    };
}

export default withSocket;