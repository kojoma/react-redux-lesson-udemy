import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const users = [
    {name: "Taro", age: 12},
    {name: "Hanako", age: 20},
    {name: "Nanashi", age: 100},
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

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default App;
