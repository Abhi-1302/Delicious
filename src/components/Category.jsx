import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'


import React from 'react'

function Category() {
  return (
    <List>
      <Slink  to={'/cuisine/Italian'}>
        <FaPizzaSlice></FaPizzaSlice>
        <h4>Italian</h4>
      </Slink>

      <Slink to={'/cuisine/American'}>
        <FaHamburger></FaHamburger>
        <h4>American</h4>
      </Slink >

      <Slink to={'/cuisine/Thai'}>
        <GiNoodles></GiNoodles>
        <h4>Thai</h4>
      </Slink>

      <Slink to={'/cuisine/Japanese'}>
        <GiChopsticks></GiChopsticks>
        <h4>Japanaese</h4>
      </Slink>
    </List>
  )
}

const List=styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;


const Slink=styled(NavLink)`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
border-radius:50%;
margin-right: 2rem;
text-decoration:none;
background: linear-gradient(35deg,#494949,#313131);
width: 4rem;
height: 4rem;
cursor: pointer;
transform: scale(0.8);

h4{
    color:white;
    font-size: 0.6rem;
}
svg{
    color:white;
    font-size: 1 rem;
}
&:hover{
    background:linear-gradient(90deg, rgba(238,75,25,1) 27%, rgba(236,222,11,1) 100%);;
    svg{
        color:white;
    }
    h4{
        color:white;
    }
}
&.active{
    background: linear-gradient(to right,#f27121,#e94057);
    svg{
        color:white;
    }
    h4{
        color: white;
    }
}
`;
export default Category