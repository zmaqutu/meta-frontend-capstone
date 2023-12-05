import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <>
    	<section className="banner">
        	<div className="container grid">
				<div className="banner-information">
					<h1>Little Lemon</h1>
					<h2>Cape Town</h2>
					<p>
						We are a family owned Mediterranean restaurant, 
						focused on traditional recipes served with a modern twist.
					</p>
					<Link className="button-primary" to={pages.get('reservations').path}>
						Reserve a table
					</Link>
				</div>
				<img className="hero-image" src={restaurantFoodImage} alt="Restaurant food" />
      		</div>
    	</section>
    </>
  )
}

export default Banner