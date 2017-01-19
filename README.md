Dashboard Prototype
=====================

POC of a dashboard developed with React/Redux.

The dashboard simulates the loading of contents provided by an API and reacts to a list of actions that intend to simulate a real-time environment.

---

## Features
- Dashboard items can expand/contract
- Only one dashboard item can be opened at a time
- Style variations per state (running, accepted, rejected)
- Ability to fetch an initial list of dashboard items
- Ability to add a new dashboard item
- Ability to update dashboard items per changes in the data
- Loading spinner for initial data load
- Animated transitions via CSS and React's animation add-ons
- Flexible layout with a minimum width (1024px)
- Unit tests (using Enzyme and Jest)

---

## Setup

Clone this repo to a folder in your computer.
```
$ git clone https://github.com/quiaro/dashboard-prototype.git
```

Go to the project directory.
```
$ cd dashboard-prototype
```

Install project dependencies.
```
$ npm install
```

---

## Usage

Build the project and create a distribution bundle for the application which will be placed in `/static`. After the bundle is built, [any HTTP server](http://www.andyjamesdavies.com/blog/javascript/simple-http-server-on-mac-os-x-in-seconds) can be run to serve the bundled app.
```
$ npm run build
```

Build the project and start a live reload server (on port 1357) i.e. any changes done to the source files will cause the app to be refreshed in the browser -**best for development**
```
$ npm run dev
```

---

## Tests
Run all of the app's unit tests.
```
$ npm run test
```

---

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

---

## Credits

- Thanks to Tobias Ahlin for his [mesmerizing loading spinner](http://tobiasahlin.com/spinkit/).

---

## License

This project is licensed under the terms of the [**MIT**](https://opensource.org/licenses/MIT) license.
