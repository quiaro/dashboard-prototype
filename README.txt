# Dashboard prototype

The current dashboard prototype meets the following requirements (per the assigment spec provided):

1. Uses react/redux
2. Uses LESS (CSS framework)
3. Dashboard items can expand/contract
4. Only one dashboard item can be opened at a time
5. Style variations per state (running, accepted, rejected) for firewall and build items
6. Ability to fetch an initial list of dashboard items
7. Ability to add a new dashboard item
8. Ability to update a dashboard item
9. Update the UI per changes in the data
10. Loading spinner for initial data load
11. Expand animation
12. Collapse animation
13. Animated bar charts
14. Flexible layout with a minimum width (1024px)
15. Includes unit tests

Before attempting any of the commands listed in the following sections, be sure to change to the /code folder.
`$ cd code`

## Install & Run

### Install all dependencies
`$ npm install`

### Run in development mode with a live reload server
`$ npm run dev`

Starts the webpack dev server at 0.0.0.0:1357

## Build
`$ webpack`
Creates a distribution bundle for the application which will be placed in `/static`
After the bundle is built, [any HTTP server](http://www.andyjamesdavies.com/blog/javascript/simple-http-server-on-mac-os-x-in-seconds) can be run to serve the bundled app.

## Tests
`$ npm run test`
Run all unit tests in the application.

## Simulation

The app runs by default a list of actions to simulate the behavior of the app in a real time environment. This functionality can be disabled by changing the store configuration in `/src/js/index.js` by replacing the following lines:

```javascript
let store = Store.configure({
  simulate: interaction
});
```

with:

```javascript
let store = Store.configure();
```
