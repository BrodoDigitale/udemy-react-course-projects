import { useSelector } from 'react-redux/es/hooks/useSelector';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  const isUserLogged = useSelector((state) => state.auth.isLogged);
  return (
    <>
      <Header />
      {isUserLogged ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
