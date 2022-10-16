import { useSelector } from 'react-redux';
import { DateTime } from "luxon";
import { selectRoute, selectQuantityOfTickets, selectTimeFromA, selectTimeFromB } from '../store/ticketSlice';

const Result = () => {
	const route = useSelector(selectRoute);
	const timeFromA = useSelector(selectTimeFromA);
	const timeFromB = useSelector(selectTimeFromB);
	const quantityOfTickets = useSelector(selectQuantityOfTickets);

	const priceOneWayTicket = 700;
	const priceCompoundTicket = 1200;

	const calcPrice = () => {
		if (route === 'из A в B и обратно в А') {
			return priceCompoundTicket * quantityOfTickets;
		} else {
			return priceOneWayTicket * quantityOfTickets;
		}
	};

	const arrivalTime = (route) => {
		if (route === 'из A в B') {
			return DateTime.fromISO(timeFromA).plus({minutes: 50});
		} else {
			return DateTime.fromISO(timeFromB).plus({minutes: 50});
		}
	};

	const calcTravelDuration = () => {
		if (route === 'из A в B и обратно в А') {
			const travelDuration = arrivalTime(route).diff(DateTime.fromISO(timeFromA), ['hours', 'minutes']).toObject();
			return `${travelDuration.hours} час(а) ${travelDuration.minutes} минут`;
		} else {
			return '50 минут';
		}
	};

	return (
		<div className="result">
			Количество билетов: <b>{quantityOfTickets}</b> по маршруту <b>{route}</b> стоимостью <b>{calcPrice()}р</b>.<br/>
			Это путешествие займет у вас <b>{calcTravelDuration()}</b>.<br/>
			Теплоход отправляется в 
				<b>{route === 'из B в A' ? DateTime.fromISO(timeFromB).toFormat(' HH-mm') : DateTime.fromISO(timeFromA).toFormat(' HH-mm')}</b>
			, а прибудет в <b>{arrivalTime(route).toFormat(' HH-mm')}</b>.<br/>
		</div>
	);
};

export default Result;
