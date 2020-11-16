# Queenly Take Home Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project sorts and filters dresses from a sample data set, similar to an e-commerce interface. Dresses can be filtered by:
- color: "Red", "Yellow", and "Blue"
- size: from size 0 to 14 (women's sizing)
- price: sorted from low to high

Sort and filters can be applied alone, or with another filter (ie: search by color AND size, search by color from lowest to highest pricing, etc...). 

Filters by color and size are dynamic without page refresh.

For example: 
- You can choose to view a red dress in size 0 and want to revert back to all colors but keep the size 0 filter (show all colors). 
- You can choose to view a red dress in size 0 but want to see a red dress in another size or view all red dresses (show all sizes). 
- You can filter back to all colors and all sizes.   

If a combination of any dress size and color is not in stock, a message will appear asking you to try another color or size filter. 

Sort will sort the dresses' pricing from low to high once if the dropdown option is selected. This sort will apply even if you change the color and size filter(s).



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

