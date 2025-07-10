# CodeCollab – Real-time Collaborative Code Editor

**CodeCollab** is a full-stack web application that enables multiple developers to write and edit code together in real-time, similar to Google Docs but designed specifically for coding. Built using **React**, **Node.js**, **Express**, and **Socket.IO**, it provides a seamless collaborative coding experience.

Whether you're pair programming, conducting live interviews, or working on side projects, CodeCollab ensures everyone stays in sync with minimal friction.

## Features

- **Real-time code sharing**: Multiple users can edit code simultaneously.
- **WebSocket-based communication**: Powered by Socket.IO for instant updates.
- **Unique room ID and username**: Join sessions with a unique room ID and personalized username.
- **CodeMirror editor**: Supports syntax highlighting and auto-closing brackets for an enhanced coding experience.
- **Toast notifications**: Alerts for user join/leave events.
- **Copy room ID to clipboard**: Easily share session links.
- **Responsive UI**: Clean, dark-themed interface optimized for all devices.

## How It Works

- Users join a room, and their socket is mapped to a username.
- Code changes are broadcast to all connected users in the same room.
- New users receive the current code state upon joining.
- When a user disconnects, others are notified, and the socket is removed from memory.

## Tech Stack

- **Frontend**: React, CodeMirror, React Router, React Hot Toast
- **Backend**: Node.js, Express.js
- **Real-time communication**: WebSockets via Socket.IO
- **Styling**: CSS (Dark theme)
- **Utilities**: UUID for room IDs, React Avatar for user interface

## Future Scope

Here are some planned enhancements for CodeCollab:

- **Online Compiler Support**: Run code in the browser with real-time output for multiple programming languages and basic I/O.
- **Chat Window**: Integrated chat for users in the same room to communicate while coding.
- **Authentication and User Profiles**: Enable login with Google or GitHub, user stats, avatars, and saved sessions.
- **Theme Switching**: Support for light and dark mode toggles with customizable editor themes.
