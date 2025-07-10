import { io } from 'socket.io-client';

export const initSocket = async () => {
    const url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001'; 
    console.log('Socket.IO connecting to:', url);

    const options = {
        forceNew: true, 
        reconnection: true, 
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ['websocket'],
    };

    return io(url, options);
};
