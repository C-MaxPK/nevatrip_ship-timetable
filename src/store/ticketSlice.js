import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	timetableFromA: [
		'2021-08-21T18:00+03:00',
		'2021-08-21T18:30+03:00',
		'2021-08-21T18:45+03:00',
		'2021-08-21T19:00+03:00',
		'2021-08-21T19:15+03:00',
		'2021-08-21T21:00+03:00',
	],
	timetableFromB: [
		'2021-08-21T18:30+03:00',
		'2021-08-21T18:45+03:00',
		'2021-08-21T19:00+03:00',
		'2021-08-21T19:15+03:00',
		'2021-08-21T19:35+03:00',
		'2021-08-21T21:50+03:00',
		'2021-08-21T21:55+03:00'
	],
  route: 'из A в B',
  departureTimeFromA: null,
  departureTimeFromB: null,
	quantityOfTickets: 1
};

export const ticketSlice = createSlice({
  name: '@@ticket',
  initialState,
  reducers: {
    changeRoute: (state, action) => {
      state.route = action.payload;
    },
    changeTimeFromA: (state, action) => {
      state.departureTimeFromA = action.payload;
    },
    changeTimeFromB: (state, action) => {
      state.departureTimeFromB = action.payload;
    },
    changeQuantityOfTickets: (state, action) => {
      state.quantityOfTickets = action.payload;
    },
		resetTimeFromA: (state) => {
			state.departureTimeFromA = initialState.departureTimeFromA;
		},
		resetTimeFromB: (state) => {
			state.departureTimeFromB = initialState.departureTimeFromB;
		},
  }
});

export const { changeRoute, changeTimeFromA, changeTimeFromB, changeQuantityOfTickets, resetTimeFromA, resetTimeFromB } = ticketSlice.actions;

export const selectTimetableFromA = (state) => state.ticket.timetableFromA;
export const selectTimetableFromB = (state) => state.ticket.timetableFromB;
export const selectRoute = (state) => state.ticket.route;
export const selectTimeFromA = (state) => state.ticket.departureTimeFromA;
export const selectTimeFromB = (state) => state.ticket.departureTimeFromB;
export const selectQuantityOfTickets = (state) => state.ticket.quantityOfTickets;

export default ticketSlice.reducer;
