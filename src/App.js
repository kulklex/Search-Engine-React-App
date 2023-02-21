import React, {useState} from 'react'
import OutLet from './components/OutLet';


function App() {
  const [darkTheme, setDarkTheme] = useState(false)


  return (
    <div className={darkTheme ? 'dark': ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <OutLet darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      </div>
    </div>
  );
}

export default App;
