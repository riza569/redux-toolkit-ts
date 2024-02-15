import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const dispatch = useAppDispatch();
  const numofIcecreams = useAppSelector(
    (state) => state.icecream.numofIcecream
  );
  return (
    <div>
      <h2>Number of Icecream - {numofIcecreams}</h2>
      <button onClick={() => dispatch(ordered(1))}>order Icecream</button>
      <button onClick={() => dispatch(restocked(1))}>restock Icecream</button>
    </div>
  );
};

export default IcecreamView;
