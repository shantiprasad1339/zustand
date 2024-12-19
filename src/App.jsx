import { useCountStore ,useFetchData} from "./zustand/store";
import "./App.css";
import { useEffect } from "react";
function App() {
  const { count, removeAllCount, decCount, incCount,  } =
    useCountStore();
    const {data,fetchData}= useFetchData()
  useEffect(() => {
    fetchData();
    
  }, [fetchData]);

  return (
    <>
      <div className="number">
        <span className="minus" onClick={() => decCount(5)}>
          -
        </span>
        <input type="text" value={count} onClick={() => removeAllCount()} readOnly/>
        <span className="plus" onClick={() => incCount(7)}>
          +
        </span>
      </div>
      {data && data.length > 0 && (
  <table>
    <thead>
      <tr>
        <th>Body</th>
        <th>ID</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.body}</td>
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}

	


    </>
  );
}

export default App;
