# Board App

A minimal collaborative whiteboard app built with Node.js, Express, React, and Fabric.js.

## Current Status

✅ **Phase 1 Complete**: Basic whiteboard functionality
- Drawing tools: pen, line, arrow, rectangle, ellipse, text
- Selection, moving, resizing, and multi-select
- Local state management
- Responsive canvas

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the React app:
   ```bash
   npm run build:dev
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`

## Development

- For development with auto-reload: `npm run dev`
- For production build: `npm run build`

## Project Structure

- `server.js` - Express server
- `src/` - React source code
  - `App.js` - Main app component
  - `components/` - React components
    - `Toolbar.js` - Drawing tools toolbar
    - `WhiteboardCanvas.js` - Fabric.js canvas component
- `public/` - Static files and built React app
- `webpack.config.js` - Webpack configuration for bundling

## Next Steps

### Phase 2: Board Persistence & Sharing
1. **Database Setup**
   - Add SQLite or PostgreSQL for board storage
   - Create board and board_activities tables
   - Implement board CRUD API endpoints

2. **Board Management**
   - Add unique board URLs (`/board/:id`)
   - Implement board creation and loading
   - Add board list/landing page
   - Store user's boards in localStorage

3. **Share Functionality**
   - Generate shareable links
   - Copy link to clipboard
   - Basic board metadata (name, created date)

### Phase 3: Real-time Collaboration
1. **WebSocket Setup**
   - Add Socket.io for real-time communication
   - Implement user sessions and board rooms
   - Handle user join/leave events

2. **Real-time Drawing**
   - Broadcast drawing actions to all users
   - Handle concurrent edits
   - Show other users' cursors/activity

3. **Conflict Resolution**
   - Implement operational transform or timestamp-based ordering
   - Handle offline/reconnection scenarios

### Phase 4: Enhanced Features
1. **UI/UX Improvements**
   - Better toolbar design with icons
   - Color picker and stroke width controls
   - Undo/redo functionality
   - Zoom and pan controls

2. **Advanced Tools**
   - Image upload and embedding
   - Sticky notes
   - Templates and shapes library
   - Export to PNG/PDF

3. **Collaboration Features**
   - User presence indicators
   - Chat functionality
   - Board permissions and access control

### Phase 5: Production Ready
1. **Performance Optimization**
   - Canvas rendering optimization
   - Efficient state management
   - Load balancing for multiple boards

2. **Security & Reliability**
   - Input validation and sanitization
   - Rate limiting
   - Error handling and logging
   - Backup and recovery

## Dependencies

- **Backend**: Express.js
- **Frontend**: React, Fabric.js
- **Build**: Webpack, Babel
- **Development**: Nodemon

## Contributing

This is a personal project for learning and fun. Feel free to fork and experiment!
