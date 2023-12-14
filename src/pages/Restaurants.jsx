import axios from 'axios'
import { useLoaderData, NavLink } from 'react-router-dom'
import Restaurant from '../components/Restaurant.jsx'
import { Container, Row, Col } from 'react-bootstrap'

export default function AllRestaurants() {

    const { restaurants } = useLoaderData()

    const allRestaurants = restaurants.map(restaurant => {
      return <Restaurant key={restaurant.restaurantId} restaurant={restaurant} />
    })

  return (
    <Container className='restaurants-div'>
      <Row>
      {allRestaurants}
      </Row>
    </Container>
  )
}

export const allRestaurantsLoader = async() => {

  const { data } = await axios.get('/api/restaurants/all')

  return data
}