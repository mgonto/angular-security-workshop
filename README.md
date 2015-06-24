# Angular Security Workshop

This is the awesome workshop to learn how to add Authentication to your Angular app :)

## Running it

To run the frontend, just serve the content on port `3000`.

To run the backend, just do `npm i` and `node server.js`

## Challenges

These are the challenges for the second module. The goal is to familiarize ourselves with *ui-router*, *angular-storage* and *route change events*.

**server.js**

- Use the express app to mount the `user-routes.js` and `anonymous-routes.js` files

**anonymous-routes.js**

- Complete a route for `/api/randon-quote` that returns a random quote from `quoter`

**user-routes.js**

- Use `jsonwebtoken` to create and return a JWT
- In the `/user` route, create a new user and add it to the users array
- In the `/user` route, return the appropriate status and JWT
- In the `/sessions/create` route, return the appropriate status and JWT

# License

MIT