# VP Weather

A weather app the fetches live conditions for any city from the Visual Crossing weather API and presents them with condition-matched icons and backgrounds.

**Live demo:** [https://katusyo.github.io/weather/]

## Built with

- JavaScript (async/await, Fetch API)
- Visual Crossing Weather API
- webpack 5 (HtmlWebpackPlugin, css/style loaders, dotenv-webpack)
- HTML and CSS, with a custom SVG icon set for each weather condition

## Features

- Search any city and see its current conditions: temperature, description, humidity and wind speed
- Loads with Tokyo's weather by default
- Toggle between Fahrenheit and Celsius -- the current result is re-rendered in the new unit without a new API call
- Background and icon change to match the returned condition (clear, rain, snow, fog, thunderstorms and more)
- Loading spinner while a request is in flight, and the search button is disabled until it completes
- Friendly error message ("City not found. Please enter a valid city name.") when a search fails

## What I learned

- Working with a real third-party REST API: building the request URL, handling non-OK responses, and parsing the JSON into just the fields the UI needs
- async/await with try/catch/finally to manage loading and error states cleanly
- Keeping fetched data in a single state object so UI actions (like the unit toggle) can re-render without refetching
- Mapping API values to local assets -- the API's icon names are matched to a bundled SVG set, with a fallback icon when there is no match
- Keeping secrets out of source control: the API key lives in a local `.env` file and is injected at built time with dotenv-webpack

## Run it locally

  git clone https://github.com/Katusyo/weather.git
  cd weather
  npm install

Create a `.env` file in the project root with your own Visual Crossing API key:

  VISUAL_CROSSING_API_KEY=your_key_here

Then:

  npx webpack serve #dev server
  npx webpack    # production build into dist/

## About

Built as part of The Odin Project's JavaScript course (Weather App project).
