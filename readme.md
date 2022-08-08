# Finesse Random
##  A Random.org Optimizer

This light-weight server acts as a simplified proxy API for the Random.org API with the goal of getting the most out of the free tier. If you sign up for a free plan for the API service you are allowed 1000 requests per day and 250,000 bits to be spread out however you'd like over those requests. The issue with this is that we would have to request too many bits each time to get the most out of what we're allowed per day. This server acts as a proxy and it will also cache the returned random number array and use it for any subsequent requests until it runs out of random numbers. At this point the Random.org API will be called again to refill the cached array. By doing this we are calling the API less often and not wasting our daily requests but also getting a lot of numbers to work with. I am currently not sure what the optimal size for the cache is but feel free to experiment with this to tune it to your liking.


## Some Issues
- Currently not secure, users might want to listen on localhost only until authentication of some kind is added or implement your self if forking.
- No rate limiting yet.
