// Create an empty object to store SS event connections
const connections = {}

// Controller function for the SSE endpoint
export const sseController = (req, res)=>{
    const {userId} = req.params
    console.log('New client connected : ', userId);
    
    // Set SSE headers
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Add the client's response object to the connections object
    connections[userId] = res

    // Send an initial event to the client
    res.write('log: Connected to SSE stream\n\n')

    // Handle client disconnection
    req.on('close', ()=>{
        // Remove the client's response object from the connections array
        delete connections[userId]
        console.log('Client disconnected');
    })
}