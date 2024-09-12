import "./App.css";
// import { useRequest } from "ahooks";
import UserSelect from './components/UserSelect'

function App() {
  // 获取mock数据
  // const getMockData = () =>
  //   fetch("http://127.0.0.1:4523/m1/5132576-4796201-default/pet/2");

  // const { loading, run } = useRequest(getMockData, { manual: true });

  return (
    <>
      <UserSelect />
    </>
  );
}

export default App;
