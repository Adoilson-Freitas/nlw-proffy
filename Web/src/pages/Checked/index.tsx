import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { LandingPage } from './styles'
import { useHistory } from 'react-router-dom';


export default function Checked() {
  const history = useHistory();

  setTimeout(() => {
    history.push('/');
  }, 2000);

  return (
    <LandingPage>
        <FaCheck color="#0b928b" fontSize="250px"/>
    </LandingPage>
  )
}