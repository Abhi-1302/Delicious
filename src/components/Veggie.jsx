import React from 'react'
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
function Veggie() {
  const [veggie,setVeggie]=useState([]);

    useEffect(()=>{
        getVeggie();
    },[]);


    const getVeggie=async()=>{

        const check=localStorage.getItem('veggie');
        if (check){
            setVeggie(JSON.parse(check));
        }
        else{
            const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
            const data=await api.json();
            localStorage.setItem('veggie',JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
        
        
    }

  return (
    <div>
            <Wrapper>
                <h3>Vegetarian Dishes</h3>
                <Splide options={{
                    perPage:4,drag:"free",gap:"5rem",pagination:false,arrows:false
                }}>
                {veggie.map((recipe)=>{
                    return(
                        <SplideSlide key={recipe.id}>
                            <Link to={'/details/'+recipe.id}>
                        <Card>
                            
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}></img>
                                <Gradient></Gradient>
                            
                        </Card></Link>
                        </SplideSlide>
                    );
                })}  
                </Splide>
            </Wrapper>
    </div>
  )
}


const Wrapper=styled.div`
    margin: 4rem 0rem;
`;

const Card=styled.div`
    height:15rem;
    border-radius: 2rem;
    overflow: hidden;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: relative;
        z-index:10;
        left:50%;
        bottom: 0%;
        transform: translate(-50%,0%);
        color: white;
        width:100%;
        text-align: center;
        font-weight:600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


const Gradient=styled.div`
z-index:3;
position: absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;
export default Veggie
