# Angular Security Workshop

This is the awesome workshop to learn how to add Authentication to your Angular app :)

## Running it

To run the frontend, just serve the content on port `3000`.

To run the backend, just do `npm i` and `node server.js`

## Challenges

These are the challenges for the fourth module.

**angular/login/login.html**

- Add a link to log into Facebook

**server/user-routes.js**

- Add `jwtInterceptorProvider` as an interceptor to the application
- Intercept the `$stateChangeStart` event and check if the route is restricted
- Intercept the `$stateChangeStart` event and validate the user session

- Create a route for `/auth/facebook` that appropriately uses `passport`
- Create a route for `/auth/facebook/callback` to handle authentication responses
- Instantiate `passport` with an appropriate `FacebookStrategy`


**angular/login.js**

- Parse `$location` and respond appropriately based Facebook response

# License

MIT