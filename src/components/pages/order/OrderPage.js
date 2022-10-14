import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function OrderPage() {

  const {name} = useParams()
  
  return (
      <div>
          <h1>Bonjour {name}</h1>
          <Link to={'/'}>
              <button>Déconnexion</button>
          </Link>
      </div>
  );
}