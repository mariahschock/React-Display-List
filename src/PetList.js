import React from 'react';
import PetItem from './PetItem';

export default function PetList({ pets }) {
  return (
    <div>
      {
        pets.map((pet, i) => <PetItem key={pet.name + i} {...pet} />)
      }
    </div>
  );
}

