// cors.js
module.exports = function(req, res, next) {
    // Allow requests from your Next.js app's domain
    res.setHeader('Access-Control-Allow-Origin', `${process.env.NEXTJS_DOMAIN}`); // Replace with your actual Next.js app's domain
  
    // Allow other headers, methods, and credentials if needed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    next();
  };
  