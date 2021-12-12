# WeatherApp 

Deployed using create-react-app,
Weather app boasts a gorgeous interface that is both informative and striking.
The app displays images of your location with matching time of day and weather conditions, with the option to view detailed five-day forecasts.
WeatherApp is a free, everyday app and it's clean, concise presentation makes it an eminently user-friendly.

## How to run the app 

1.  Either fork or download the app and open the directory in the Cli.
2.  Install all dependencies using the 'npm i' command.
3.  *Edit the .env file to set your API key.  
*should look like:
REACT_APP_API_KEY = [ AccuWeather API Key ]
4.  start the web server using the 'npm run' command. The app will be served at http://localhost:3000/
5.  Go to http://localhost:3000/ in your browser and enjoy.



## Available commands
npm start

Start the app in development mode on http://localhost:3000.

npm run build

Build the project for production.

npm run eject

If you know what you are doing and the consequences...
It will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. 
All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
### Note: this is a one-way operation. Once you eject, you can’t go back!

![weather](https://user-images.githubusercontent.com/65711940/139273773-e7f4bc2c-d1ff-49a9-9221-7be7f8934dcb.jpeg)
The app Interacts with AccuWeather API to Display Current Weather details
Of a location of the user choice, Can be your device location if 'Location Service' is allowed or any city looked up in the search input.
Select and save places to favorite locations list.

![favorites](https://user-images.githubusercontent.com/65711940/139273180-39edd1a1-1dff-474c-afcf-f01eaf3d3268.jpeg)
List of favorites places View, where you can accsess saved locations,
Each favorite has a card view, 
By clicking on a favorite card the app redirects to 'WeatherView' the main view, with forcasts of 5 days as well as the current Weather details of the selected place, 

Press the <'heart' <3 > button to remove a location from your favorites.

![responsive](https://user-images.githubusercontent.com/65711940/139274038-93ea97a6-27b4-4a88-b0ac-4695009d4da6.jpeg)
Designed for a unified experience across All platforms.

## features
Easy to use, allow (Geo-)'location service' to get your current location.
or Type in the main view 'search bar', a city name.
The 'SearchInput' component will help you find the places youre looking for,
it has auto correct feture that will suggests you with locations while typing fetched from the API, the list of 'suggested' is based on the text entered in the UI.
Check the 'Dark mode' Button at the navigation bar, that abjusts contrast to all the APP layout. 
Navigate to Favorites View can be done by clicking on the heard icon on the navigation bar.
As well as 'Units' Button, That toggles between displaying temperatures in F' or C'.

