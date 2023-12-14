import { Card, CardText } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import StarAvg from './StarAvg'
import { useEffect, useState } from 'react'
import { calculateAvgStars } from '../assets/funx.js'

export default function Restaurant({ restaurant }) {

	const [avgStars, setAvgStars] = useState(0)

	const navigate = useNavigate()

	const calculateStarAvg = () => {
		setAvgStars(calculateAvgStars(restaurant))
	}

	useEffect(() => {
		calculateStarAvg()
	}, [])

  return (
    // <div>
		// 	<h4>
		// 		<NavLink
		// 			to={`/restaurant/${restaurant.restaurantId}`}
		// 			className='restaurant-a'
		// 			>{restaurant.name}
		// 		</NavLink>
		// 	</h4>
		// 		<ul>
		// 			<li>
		// 				<NavLink 
		// 					to={`/land/rest/${restaurant.land.landId}`}
		// 					className='restaurant-a'
		// 					>{restaurant.land.name}
		// 				</NavLink>
		// 			</li>
		// 			<li>{restaurant.expense}</li>
		// 		</ul>
    // </div>

		<Card 
			style={{ width: '20rem'}}
			onClick={() => navigate(`/restaurant/${restaurant.restaurantId}`)}
			>
			<Card.Img
				variant='top'
				src={restaurant.img}
				className='restaurant-card-img'
				/>
			<Card.Body>
				<Card.Title>{restaurant.name}</Card.Title>

				<Card.Text>
					<StarAvg starAvg={avgStars} />({avgStars})
				</Card.Text>

				<Card.Body>
					<Card.Text>
						{restaurant.fullService ? 
						<i id="rest-check" class="bi bi-check-lg"></i>
						:
						<i id="rest-x" class="bi bi-x"></i>
						}Full service <i id="rest-server" class="bi bi-person-walking"></i>
						</Card.Text>

						<Card.Text>
						{restaurant.refills ? 
						<i id="rest-check" class="bi bi-check-lg"></i>
						:
						<i id="rest-x" class="bi bi-x"></i>
						}Refills <i id="rest-refill" class="bi bi-cup-straw"></i>
						</Card.Text>

				</Card.Body>

				<Card.Title id='restaurant-expense'>
					{restaurant.expense}
				</Card.Title>

				<Card.Text id='restaurant-description'>
					{restaurant.description}
				</Card.Text>

			</Card.Body>
		</Card>
  )
}
