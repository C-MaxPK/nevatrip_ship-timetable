import { useDispatch } from 'react-redux';
import { changeRoute } from '../store/ticketSlice';

const Route = () => {
	const dispatch = useDispatch();
	
	return (
		<div className="route">
			<label htmlFor="route">Выберите направление </label>
			<select name="route" id="route" onChange={e => dispatch(changeRoute(e.target.value))}>
				<option value="из A в B">из A в B</option>
				<option value="из B в A">из B в A</option>
				<option value="из A в B и обратно в А">из A в B и обратно в А</option>
			</select>
    </div>
	);
};

export default Route;
