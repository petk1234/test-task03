
## Getting started with Pokedex project.

Pokedex is a simple app that fetches pokemons from Pokedex api and displays them on the site.
This site contains only 1 page with 4 main sections: header/title, Filters, PokemonsList and PokemonInfo.

### Header/title

Just the title of this app.

### Filters

A tool that allows user to get pokemons of the specified type. You have just to choose a type you want to find from pop-up list and click on the 'find' button. 

### PokemonsList

A section that is responsible for displaying info (pokemons) from server. Each pokemon-info displayed in special component PokemonCard. So that, PokemonsList is made up of PokemonCards.

### PokemonInfo

This is a component that appears only if a user clicks a PokemonCard. It is responsible for displaying more detailed information (stats, characteristics, types) about each pokemon.

### LoadMore button

This is just a button that allows to load/show more pokemons in PokemonList section.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
