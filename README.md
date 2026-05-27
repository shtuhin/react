#Parcel
- dev build 
- local Server
- HMR = Hot Module Replacemnt
- Faster builds because of caching
- Image optimization for you
- Minification 
- Bundling
- Compress
- Consistent Hashing 
- Code Splitting 
- Differential Bundling - to support on older browser
- dDiagonestic
- Error Handling
- Can host in https
- parcel documentation have to read or parcel.org
- Tree shaking algorithm - remove unused codes
- DIfferent Build for Dev and prod bundles


# Webpage layout
# React Demo — FoodBazar

Professional README for the project in this folder. This repository contains small demo pages and a React-based FoodBazar example built for learning and experimentation.

## Overview

- **Name:** react
- **Description:** This is react test by Tuhin
- **Author:** SH Tuhin
- **Repository:** https://github.com/shtuhin/react

This workspace contains a lightweight React demo and several standalone HTML/JS examples used for lessons and experiments.

## Table of contents

- Project structure
- Features
- Tech stack
- Installation
- Development
- Build & Test
- File map and quick descriptions

## Features

- Small React demo application (FoodBazar) showcasing component composition
- Parcel-powered development server and build pipeline
- Example lesson pages for HTML/CSS/JS practice

## Tech stack

- React
- Parcel (bundler)
- Jest (testing — placeholder)

## Installation

Install dependencies with your package manager (recommended: npm or yarn):

```bash
npm install
```

## Development

Start a local development server for the FoodBazar demo:

```bash
npm run start
```

This runs `parcel foodbazar/index.html` as defined in `package.json`.

## Build

Create a production build for the FoodBazar demo:

```bash
npm run build
```

## Test

Run tests (project includes a `test` script that expects Jest):

```bash
npm test
```

## Project structure

Top-level files:

- `index.html` — optional root HTML for experiments
- `index.js` — optional root script
- `package.json` — project metadata and scripts
- `note.txt` — personal notes

Primary folders:

- `foodbazar/` — Main React demo and static entry point
        - `index.html` — entry HTML for the demo
        - `style.css` — demo styles
        - `src/` — demo source files
                - `App.js` — main app component
                - `components/` — React components
                        - `Header.js` — header component
                        - `BodyComponent.js` — main body with search and list
                        - `RestaurantCard.js` — restaurant card UI
                        - `SearchElement.js` — search input component
                - `utils/` — helper data
                        - `contents.js`
                        - `mockData.js`

- `lesson 1/` — simple HTML/CSS/JS lesson
        - `index.html`
        - `script.js`
        - `style.css`

- `src/` — (empty or additional examples)

- `understanding/` — small demonstration page
        - `index.html`
        - `script.js`

## Notes & recommendations

- The project uses Parcel as the dev server and bundler. Parcel provides HMR (hot module replacement), fast incremental builds and minimal configuration — see https://parceljs.org for details.
- If you plan to expand the React demo, move the `foodbazar/src` files into a standard React app layout and add a proper entry via `src/index.jsx` and ReactDOM render.
- Update dependency versions in `package.json` as needed for your environment.

## License

This project is licensed under the ISC license (see `package.json`).

---

If you want, I can also:

- add a short developer guide for adding new components
- run a quick dependency audit and update `package.json`
- wire a basic React project entrypoint (`src/index.jsx`) to match common conventions

Let me know which of these you'd like next.