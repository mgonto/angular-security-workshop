# Angular Security Workshop

This is the awesome workshop to learn how to add Authentication to your Angular app :)

## Running it

To run the frontend, just serve the content on port `3000`.

To run the backend, just do `npm i` and `node server.js`

## Challenges

These are the challenges for the third module.

**backend/protected-routes.js**

- Use `express-jwt` to validate the user session

**angular/apps.js**

- Add `jwtInterceptorProvider` as an interceptor to the application
- Intercept the `$stateChangeStart` event and check if the route is restricted
- Intercept the `$stateChangeStart` event and validate the user session

**angular/login.js**

- Pending

# License

MIT
