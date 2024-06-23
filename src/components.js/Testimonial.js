import React, { useCallback, useState } from "react";
import Card from "./Card";
import reviews from "../data";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function Testimonial(props){

    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
      if(index-1 < 0){
          setIndex(reviews.length-1);
    }else{
        setIndex(index-1);
    }
    }

    function rightShiftHandler(){
       if(index+1 >= reviews.length){
        setIndex(0);
       }else{
        setIndex(index+1);
       }
    }
    function surpriceHandler(){
        let randomIndex = Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }
    
    return (
        <div >
            <Card reviews={reviews[index]}></Card>
            <div className=" my-4 mx-auto">
            <button className="left-arrow text-3xl text-violet-500 font-bold  hover:text-violet-800" onClick={leftShiftHandler}><MdOutlineKeyboardArrowLeft/></button>
            <button className="right-arrow text-3xl text-violet-500 font-extrabold hover:text-violet-800" onClick={rightShiftHandler}><MdOutlineKeyboardArrowRight/></button>
            </div>
         <div className="bg-violet-500 mx-auto w-[150px] text-center align-center rounded-md hover:bg-violet-700">
            <button className="surprice-me w-[100p] py-1 px-5 rounded-md font-bold text-white" onClick={surpriceHandler}>Surprice Me</button>
         </div>
        </div>
    )
}

export default Testimonial;