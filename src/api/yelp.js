import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer wo7W2X_5CKQwk0O-whUM_FTNUwOVpAAdJj9Qpqd50ZxW_x1bOebdyNDXRSRpa6iJUZWTzNSVpSnbLMniK4v3Mhr8mX7N84HXa9r2BbR83PjDTGnVv0VPousE0pOQXnYx'
    }
});