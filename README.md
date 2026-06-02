# FoodBazar React Project

A simple React restaurant UI built with Parcel bundler. The project demonstrates component-based design, props usage, `useState` for filter handling, and rendering a list of restaurant cards from mock data.

## Project Overview

- Uses **React 19** with **Parcel** as the bundler
- Main UI is implemented in the `foodbazar` folder
- Includes a header, search element, filter panel, restaurant cards, and footer
- Filters are implemented using `useState` in `BodyComponent.js`
- Restaurant data is stored in `foodbazar/utils/mockdata.js`

## Features

- Header with logo and nav items
- Search input UI (search behavior not wired yet)
- Filter buttons for:
  - Rating 4.0+
  - Price low to high
  - Price high to low
  - Delivery time (fastest first)
  - Reset filters
- Restaurant card list rendered dynamically using `filteredRestaurants`
- Reusable `RestaurantCard` component with props

## Folder Structure

```
foodbazar/
├── App.js
├── index.html
├── style.css
├── componants/
│   ├── BodyComponent.js
│   ├── Footer.js
│   ├── Header.js
│   ├── RestaurantCard.js
│   └── SearchElement.js
└── utils/
    └── mockdata.js
```

## Main Components

### `App.js`
- Root component that renders `Header`, `BodyComponent`, and `Footer`
- Mounts the app to `#root` in `index.html`

### `Header.js`
- Displays app logo and navigation links

### `BodyComponent.js`
- Contains search UI and filter buttons
- Uses `useState` to manage `filteredRestaurants`
- Applies sorting/filter logic and renders `RestaurantCard` components

### `RestaurantCard.js`
- Receives restaurant data via `props.RestData`
- Displays image, name, price, cuisine, rating, and delivery time

### `SearchElement.js`
- Renders search input and button UI
- Search functionality is currently not implemented in code

### `Footer.js`
- Simple footer with copyright text

## Data Source

### `foodbazar/utils/mockdata.js`
- Contains an array of restaurant objects
- Each restaurant has:
  - `name`
  - `image`
  - `price`
  - `cuisine`
  - `rating`
  - `deliveryTime`

## Available Scripts

From the project root, run:

```bash
npm install
npm start
```

- `npm start` → Starts the Parcel dev server for `foodbazar/index.html`
- `npm run build` → Builds the production bundle using Parcel
- `npm test` → Runs Jest (if tests are added)

## Notes

- This project currently uses **mock data** and client-side filtering.
- The search input component is styled but not yet connected to actual search logic.
- The filter buttons use `useState` and JavaScript array methods to update the displayed restaurant list.

## Future Improvements

- Add search functionality inside `SearchElement.js`
- Add real routing with React Router
- Convert `mockdata.js` to API data fetching
- Improve responsive styling in `style.css`
- Add more interactive UI states (loading, no results, active filter indicator)

## Dependencies

- `react`
- `react-dom`
- `parcel`

## Notes on Parcel

Parcel is used here for easy bundling, hot module replacement, and fast development builds. The app entry point is `foodbazar/index.html`.
