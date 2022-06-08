import React from 'react';

export default function PetItem({ name, type, age }) {
  return (
    <div className="pets">
      <p>{name} is a {type} and is {age} years old.</p>
    </div>
  );
}

