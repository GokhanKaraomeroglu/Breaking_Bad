import React from 'react';

const Card = ({item}) => {
	return (
		<div className= 'card'>
			<img src= {item.img} alt='img' />
		</div>
	)
}
export default Card;
