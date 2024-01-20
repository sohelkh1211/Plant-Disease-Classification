import React, { useEffect } from 'react'
import { useContext } from 'react';
import Provider, { LoaderContext } from './Provider';
import Navbar from './Navbar';
import Leaf5 from '../assets/Leaf5-transformed.webp'
import Classifier from './Classifier';
import { TitleName } from '.';

const Preloader = () => {
  const { isVisible, setIsVisible, dots, setDots } = useContext(LoaderContext);
  console.log(isVisible);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timeoutID);
  }, []);

  useEffect(() => {
    const timeID = setInterval(() => {
      setDots((prevDots) => (prevDots % 3) + 1);
    }, 500)

    return () => clearInterval(timeID);
  }, []);

  const renderDots = () => {
    return '.'.repeat(dots);
  }

  return (
    <Provider >
      {isVisible ? (
        <>
          <TitleName title={"🍁 Redirecting 🍃"} />
          <div className='relative mx-auto top-[170px] w-[200px] h-[200px] bg-transparent border-none border-black-100'>
            <div className='relative w-[70%] h-[70%] m-[15%] -rotate-45'>
              <div className='box one'></div>
              <div className='box two'></div>
              <div className='box three'></div>
              <div className='box four'></div>
              <div className='box five'></div>
              <div className='box six'></div>
            </div>
          </div>
          <div className='relative top-[160px] w-fit mx-auto border-none border-black'>
            <p className='lora font-bold text-[17px]'>Loading{renderDots()}</p>
          </div>
        </>
      ) : (
        <>
          <TitleName title={"🍁 BotanicSafeguard 🍃"} />
          <Navbar />
          <img src={Leaf5} className='absolute -z-10 top-0 object-cover h-auto w-full blur-[1.5px]' />
          <Classifier />
        </>
      )}
    </Provider>
  )
}

export default Preloader
