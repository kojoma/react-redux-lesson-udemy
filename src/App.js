import React from 'react';

const App = () => {
  const users = [
    {name: "Taro", age: 12},
    {name: "Hanako", age: 20},
    {name: "Nanashi"},
  ];
  return (
    <div>
      {
        users.map((u, index) => {
          return <User name={u.name} age={u.age} key={index}/>
        })
      }
    </div>
  );
};

const User = (props) => {
  return <div>Hi {props.name} I'm {props.age} years old.</div>
};

User.defaultProps = {
  age: 1
};

export default App;
