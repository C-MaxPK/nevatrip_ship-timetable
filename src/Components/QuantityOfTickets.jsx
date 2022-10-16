import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantityOfTickets } from '../store/ticketSlice';

const QuantityOfTickets = () => {
	const [ quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changeQuantityOfTickets(quantity));
	}, [dispatch, quantity]);

	const checkValue = (value) => {
		if (value < 1) {
			setQuantity(1);
		} else {
			setQuantity(Math.round(value));
		}
	};

	return (
		<div className='quantityOfTickets'>
			<label htmlFor="num">Количество билетов </label>
			<input type='number' min={1} id="num" value={quantity} onChange={e => checkValue(e.target.value)}></input>
		</div>
	);
};

export default QuantityOfTickets;
