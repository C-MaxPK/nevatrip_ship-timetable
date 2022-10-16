import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from "luxon";
import TicketFromA from './TicketFromA';
import { changeTimeFromB, resetTimeFromA, resetTimeFromB, selectTimeFromA, selectTimetableFromB } from '../store/ticketSlice';

const TicketComposite = () => {
	const dispatch = useDispatch();
	const timeFromA = useSelector(selectTimeFromA);
	const timetableB = useSelector(selectTimetableFromB);

	useEffect(() => {
		dispatch(changeTimeFromB(timetableB[0]));
		return () => {
			dispatch(resetTimeFromA());
			dispatch(resetTimeFromB());
		};
	}, [dispatch, timetableB]);

	const arrivalTimeToB = DateTime.fromISO(timeFromA).plus({minutes: 50});
	const findFirstTimeOption = timetableB.find(time => {
		const timeLuxon =  DateTime.fromISO(time);
		return arrivalTimeToB < timeLuxon;
	});

	dispatch(changeTimeFromB(findFirstTimeOption));

	return (
		<div className="ticketComposite">
			<TicketFromA />
			<div className="ticketFromB">
				<label htmlFor="ticketFromB">Выберите время оттуда </label>
				<select name="ticketFromB" id="ticketFromB" onChange={e => dispatch(changeTimeFromB(e.target.value))}>
					{timetableB.map(time => {
						const timeLuxon =  DateTime.fromISO(time);
						if (arrivalTimeToB < timeLuxon) {
							return <option key={time} value={time}>{timeLuxon.toFormat('HH:mm')} (из B в A)</option>
						} else {
							return null;
						}
					})}
				</select>
			</div>
		</div>
	);
};

export default TicketComposite;
