import React from 'react';

const Card = ({ monster }) => {
  return (
    <div className='card_wrapper'>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=300x300`}
        alt='monster'
      />
      <h3>{monster.name}</h3>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
