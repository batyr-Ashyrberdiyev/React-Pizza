import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <div className="bg-mainYellowBg px-[50px] py-10">
      <div className="bg-white rounded-[10px] py-10">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
