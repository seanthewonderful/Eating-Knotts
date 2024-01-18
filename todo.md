Database model

- [x] User
- [x]Admin
- [x]Restaurant
- [x]Cuisine
  - [x]Breakfast, American, Southern, Meican, Italian, Dessert, Snacks, Coffee, Alcohol
- [x]Land
  - [x]Camp Snoopy, Fiesta Village, Ghost Town, Boardwalk
- [x]Rating
- [x]FoodItem
- [x]MealType

Relationships:

- [x]User O:M Rating
- [x]Restaurant O:M Rating
- [x]Restaurant M:O Land
- [x]Restaurant M:M Cuisine
- [x]Restaurant M:M FoodItem
- [x]Restaurant M:M MealType
- [x]FoodItem M:M MealType

Seed Database

- [x]5 users
- [x]2 admin
- [x]10 restaurants
- [x]lands
- [x]cuisines
- [x]mealTypes
- [x]user ratings?

Server + endpoints

- [x]"/restaurants"
- [x]"/restaurant/:restId"
- [x]"/restaurant/create"
- [x]"/restaurant/update"
- [x]"/restaurant/delete"

- [x]"/user/:userId"
- [x]"/user/create"
- [x]"/user/update/:userId"
- [x]"/user/delete/:userId"

- [x]"/session-check"
- [x]"/login"
- [x]"/logout"

- [x]"/rating/create"
- [x]"/rating/update"
- [x]"/rating/delete"

- [x]Test Routes

Browser Router - what routes?

- [x]"/"
  - [x]map
- [x]"/profile/:id"
- [x]"/restaurants"
  - []search option
- [x]"/restaurant/:restId"
- [x] "/land/restaurants"
- [x] error handling

Redux store

- [x]start with single reducer for now?
- [x]userId, restaurantId, adminId I think is all needed for now.

Login/logout

- [x] Login page
  - [x] User login
  - [x] Admin login
- [x] userId/adminId save to req.session
- [x] userId/adminId save to Redux
- [x] Register page
  - [x] User only

Create Navbar.jsx

- [x]Navlinks to routes
- [x]Flex css
- [x]Login/register/admin options
- [x]Route to user profile

Create user profile page

- [x]See user information
- [x]See all ratings left
  - [x]Edit Review button
- [x]Navbar display username and avatar
- []Offcanvas display info edit

Restaurant page(s)

- [x] Allow for user ratings
  - [x] Logic if no ratings
  - [x] display total ratings and avg stars
- [x] Endpoint to grab all ratings sans user
- [x] Display user's rating from user obj.
- [x] Remember where user was upon login re-route back
  - https://stackoverflow.com/questions/72163183/how-can-i-redirect-to-previous-page-after-login-in-react-router

Create Admin page

- [x] Navbar dynamically render for admin page
- [x] What can admins do?
  - [x] Create new admin
  - [x] edit admins
  - [x] delete admins
  - [x] Create new user
  - [x] Edit user info
  - [x] delete user
  - [x] New restaurant
  - [x] Edit restaurant details
  - [x] Edit user ratings
  - [x] delete user ratings

Create Leaflet map

- [x] Map displays
- [x] Create markers
  - [x] Use loader data? Or just load it in with useEffect?
  - [x] Create custom marker icons
- [x] create Popup.jsx
- [x] create Marker.jsx
- [x] Popup link to restaurant page

Advanced map features:

- [x] Popup box styling
- [x] Different layer?
- [x] Unique Icons
- [x] Add relational data to DB for some of this to be good
      Later?
- [] Collapsible navbar?
- [] List view of restaurants with map?
- [] Search bard to flyto map locations and open marker
  - https://leafletjs.com/plugins.html#basemap-providers:~:text=Nicholas%20Hallahan-,Search%20%26%20popups,-Plugins%20that%20search
- [] Clickable layers for lands

Other routes

- [x] Show all restaurants by land
- [x] Show all restaurants by cuisine
  - [x] create route
- [x] Show all restaurants by meal type
  - [x] create route
- [x] Search for restaurants on each page
  - [x] by name
  - [x] by land name?
- [x] filters - ? kinda undoes above pages but better
- [x] land
- [x] cuisine
- [x] meal type
- [] Readme include instructions for how to demo an admin/user

Styling

- [] Mobile friendly
- [x] Navbar sticky top
- [] Collapsible edit info

Extra features

- [] Something offcanvas?
- [x] Remember where user was for login re-route
- [] Page restrictions
- [x] Admin adding instant update to page
- [x] Outside Park restaurants seeded
- [] Create ratings for each spot

Knott's Site Issues

- "View Map" on Dining page opens pdf of Soak City with no restaurant data
- Poor image quality (charleston coffee), and photos of guests (pemmican), and generic (Sutters pizza)
- Restaurant descriptions
- Should display menu items front and center

Bugs

- [] When admin updates own IMG, navbar does not recognize the change until page reload
