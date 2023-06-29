import { useState } from "react";

function App() {
  const [FirstName,setFirstName] = useState('');
  const [SecondName, setSecondName] = useState('');

  return (
    <div className="App">
      <div className="grid place-items-center h-screen">
        <form>
          <input
            type="text"
            name="firstName"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Имя"
            value={FirstName}
            onChange={(e)=>{setFirstName(e.target.value)}}
          />
          <input
            type="text"
            name="secondName"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Фамилия"
            value={SecondName}
            onChange={(e)=>{setSecondName(e.target.value)}}
          />
          <hr/>
          {FirstName} {SecondName}
        </form>
      </div>
    </div>
  );
}

export default App;
