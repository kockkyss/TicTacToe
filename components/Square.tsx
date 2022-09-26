import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { markSquare } from "../store/gameSlice";

const Square: React.FC<{ square: number; row: number }> = ({ square }) => {
	const dispatch = useDispatch();
	// const firstPlayersTurn = useSelector(
	// 	(state: RootState) => state.game.firstPlayer
	// );

	const squareMark = useSelector(
		(state: RootState) => state.game.board[square]
	);
	const handleUserClick = () => {
		dispatch(markSquare({ square }));
	};

	return (
		<div
			className='border h-full w-1/3 text-white flex justify-center items-center text-6xl cursor-pointer'
			onClick={handleUserClick}
		>
			{squareMark}
		</div>
	);
};

export default Square;
