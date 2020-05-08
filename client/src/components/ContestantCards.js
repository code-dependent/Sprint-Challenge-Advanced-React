import React, {useState} from 'react';
import {useLocalStorage} from './customHooks/useLocalStorage'
import {CountryFlag} from '../assets/CountryFlags'

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators } from 'reactstrap';

const ContestantCards = (props)=>{
    const [activeIndex, setActiveIndex] = useLocalStorage('activeIndex',0)
    const [animating, setAnimating] = useState(false)

    const contestants = props.data;

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === contestants.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    const prev = () => {
        if (animating) return;
        const prevIndex = activeIndex === 0 ? contestants.length - 1 : activeIndex - 1;
        setActiveIndex(prevIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = contestants.map(contestant=>(
        <CarouselItem
            onExiting={()=>{setAnimating(true)}}
            onExited={()=>{setAnimating(false)}}
            key={contestant.id}
            style={{position:'relative',width:'100%'}}
            >
            <img
                style={{width:'50%',height:'30vh',position:'absolute'}} 
                src={CountryFlag[contestant.country]} 
                alt={contestant.name}/>
            <img
                style={{width:'50%',height:'30vh', opacity:'.5'}} 
                src={'https://cdn.pixabay.com/photo/2016/05/20/21/57/football-1406106_1280.jpg'} 
                alt={contestant.name}/>
            <h1>{contestant.name}</h1>
            <h2>{`From: ${contestant.country}`}</h2>
            <p>{`index: ${activeIndex}`}</p>
        </CarouselItem>
    ))


    return(
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={prev}
            >
        <CarouselIndicators items={props.data} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={prev} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    )

}

export default ContestantCards;