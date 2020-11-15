import { dressData } from './dressData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Queenly Interview Take-Home Exercise: Sorting and Filtering Dresses
      </header>

      <div className="dressFilters">
        Put your filter/sort buttons and dropdown menus here
      </div>
      <div className="dressSortResults">
        {dressData.map((dressDataItem) => (
          <div className="dressGridItem">
            <div className="dressGridImgContainer">
              <img src={dressDataItem['photo_url']} width={150}/>
            </div>
            <div>${dressDataItem['price']}</div>
            <div>Size {dressDataItem['size']}</div>
            <div>Color: {dressDataItem['color']}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
