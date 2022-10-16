import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from "luxon";
import { changeTimeFromA, resetTimeFromA, selectTimetableFromA } from '../store/ticketSlice';

const TicketFromA = () => {
	const dispatch = useDispatch();
	const timetable = useSelector(selectTimetableFromA);

	useEffect(() => {
		dispatch(changeTimeFromA(timetable[0]));
		return () => {
			dispatch(resetTimeFromA());
		};
	}, [dispatch, timetable]);

	return (
		<div className="ticketFromA">
			<label htmlFor="ticketFromA">Выберите время туда </label>
			<select name="ticketFromA" id="ticketFromA" onChange={e => dispatch(changeTimeFromA(e.target.value))}>
				{timetable.map(time => {
					const timeLuxon = DateTime.fromISO(time);
					return <option key={time} value={time}>{timeLuxon.toFormat('HH:mm')} (из A в B)</option>
				})}
			</select> 
		</div>
	);
};

export default TicketFromA;
