# WeatherApp 
Weather app boasts a gorgeous interface that is both informative and striking.

Look up places to get their weather conditions,
The app suggests options based on type in text.

Save places to your favorites.

The app displays images of your location with matching time of day and weather conditions, 

with the option to view detailed five-day forecasts.

The app is free, everyday app and it's clean, concise presentation makes it an eminently user-friendly.

*Deployed using create-react-app.

## How to run the app 
1.  Either fork or download the app and open the directory in the cli.
2.  Install all dependencies using the 'npm i' command.
3.  Edit the .env file to set your API key. 
    
    should look like:
    REACT_APP_API_KEY = [ AccuWeather API Key ].  
    **if you dont have a key, visit https://developer.accuweather.com/ to get yours for free.

4.  Start the web server using the 'npm run' command.
    The app will be served at http://localhost:3000/

5.  Go to http://localhost:3000/ in your browser and enjoy.


## Available commands
'npm run'

Start the app in development mode on http://localhost:3000.

'npm run build'

Build the project for production.

'npm run eject'

It will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. 

All of the commands except eject will still work, 
but they will point to the copied scripts so you can tweak them.

At this point you’re on your own.
### Note: this is a one-way operation. Once you eject, you can’t go back!

## How to use & features
 
Allow 'location service', if you want to get your current Geo-location by co-ords.

Type in the main view 'search bar', a city name.
The 'SearchInput' component will help you find the places youre looking for,
auto correct feture will suggest locations while typing.

*The list of 'suggested' is based on the text entered in the UI fetched from the API.

Check the 'Dark mode' Button at the top of the page on the navigation bar, 
Abjusts contrast to the app's layout. 

Navigate to Favorites View can be done by clicking on the heart icon on the navigation bar.
As well as 'Units' Button, That toggles between temperatures units (F' or C').

## Users Stories
- A user can look up locations.
- A user can save/remove favorites.
- A user can ubjust the app's theme.
- A user can choose units of temperature. Fahrenheit (°F) or Celsius (°C).
- A user can navigate to 'Main' and 'Favorites' views.

# UI - preview
### Main page
![weather](https://user-images.githubusercontent.com/65711940/139273773-e7f4bc2c-d1ff-49a9-9221-7be7f8934dcb.jpeg)
Display Current Weather details as well as 5days-forcasts of your location.
Search Bar component at the center of the page, type in for look up.
Navigation and View Abjustments icons can be found on the nav-bar at the top.

### Favorites page
![favorites](https://user-images.githubusercontent.com/65711940/139273180-39edd1a1-1dff-474c-afcf-f01eaf3d3268.jpeg)
Favorites places View, 
Where you can accsess saved locations, Each favorite has a card view, 

By clicking on a favorite card the app redirects to 'WeatherView' the main view, 

Press the <'heart' <3 > button to remove a location from your favorites.
### Main page - small device view
![responsive](https://user-images.githubusercontent.com/65711940/139274038-93ea97a6-27b4-4a88-b0ac-4695009d4da6.jpeg)

Designed for a unified experience across All platforms.

