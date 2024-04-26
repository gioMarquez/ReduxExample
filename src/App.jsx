
import { useDispatch } from 'react-redux'
import './App.css'
import Email from './components/Email'
import Header from './components/Header'
import { useEffect } from 'react';
import { addUser } from './redux/userSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/5')
      .then(response => response.json())
      .then(data => dispatch( addUser(data) ))
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className=''>
      <Header />
      <Email />
     
    </div>
  )
}

export default App;