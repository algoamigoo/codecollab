import { io } from 'socket.io-client';

export const initSocket = async () => {
    console.log('Socket.IO connecting to:', process.env.REACT_APP_BACKEND_URL);
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    const url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001'; // Fallback
    return io(url, options);
};