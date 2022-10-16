import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from "luxon";
import { changeTimeFromB, resetTimeFromB, selectTimetableFromB } from '../store/ticketSlice';

const TicketFromB = () => {
	const dispatch = useDispatch();
	const timetable = useSelector(selectTimetableFromB);

	useEffect(() => {
		dispatch(changeTimeFromB(timetable[0]));
		return () => {
			dispatch(resetTimeFromB());
		};
	}, [dispatch, timetable]);

	return (
		<div className="ticketFromB">
			<label htmlFor="ticketFromB">Выберите время оттуда </label>
			<select name="ticketFromB" id="ticketFromB" onChange={e => dispatch(changeTimeFromB(e.target.value))}>
				{timetable.map(time => {
					const timeLuxon = DateTime.fromISO(time);
					return <option key={time} value={time}>{timeLuxon.toFormat('HH:mm')} (из B в A)</option>
				})}
			</select>
		</div>
	);
};

export default TicketFromB;
