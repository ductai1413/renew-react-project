import { useState } from 'react';
import '@/App.scss';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/interfaces/Routes';
import MenuBar from '@/common-components/MenuBar';
import viteLogo from '@assets/vite.svg';
import reactLogo from '@assets/react.svg';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
  };

  return (
    <>
      <MenuBar />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Giới thiệu cửa hàng</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      <Routes>
        {ROUTES.map(r => (
          <Route
            key={r.path}
            path={r.path}
            element={r.component ? <r.component /> : <>Something went wrong</>}
          />
        ))}
      </Routes>
    </>
  );
};

export default App;
