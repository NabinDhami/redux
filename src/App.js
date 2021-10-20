import "./App.css";
import { incNumber, decNumber } from "./Actions/index";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div class="container">
        <h1>Increment/Decrement counter</h1>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            class="quantity__input"
            value={myState}
          />
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
