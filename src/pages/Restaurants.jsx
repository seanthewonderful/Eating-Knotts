import axios from 'axios'
import { useLoaderData, NavLink } from 'react-router-dom'
import RestaurantCard from '../components/RestaurantCard.jsx'
import { Container, Row, Col } from 'react-bootstrap'

export default function AllRestaurants() {

    const { restaurants } = useLoaderData()

    const allRestaurants = restaurants.map(restaurant => {
      return <RestaurantCard 
              key={restaurant.restaurantId} 
              restaurant={restaurant} 
              />
    })

  return (
    <Container fluid className='restaurants-div text-center'>
      <Row 
        id='all-restaurants'
        className='justify-content-center'
        >
          <h3>Knott's Berry Farm Restaurants</h3>
      {allRestaurants}
      </Row>
    </Container>
  )
}

export const allRestaurantsLoader = async() => {

  const { data } = await axios.get('/api/restaurants/all')

  return data
}