import { useContext } from 'react'
import { LoaderContext } from './Provider'

const Test = () => {
    const { isVisible, setIsVisible, dots, setDots } = useContext(LoaderContext);
    // console.log(isVisible);
    const handleClick = () => {
        if(isVisible){
            setIsVisible(false);
        }
        else{
            setIsVisible(true);
        }
    }
    return (
        <div className='relative flex flex-row top-[100px] mx-auto w-fit h-fit border border-black'>
            {isVisible && <p className='lora text-[17px] font-bold'>
                Hello this is test example
            </p>}
            {!isVisible && <p className='lora text-[17px] font-bold'>
                OOPS! Not Visible.
            </p>}
            {isVisible && <button className='relative top-[30px] border border-black' onClick={handleClick}>Hide</button>}
            {!isVisible && <button className='relative top-[30px] border border-black' onClick={handleClick}>Show</button>}
        </div>
    )
}

export default Test
