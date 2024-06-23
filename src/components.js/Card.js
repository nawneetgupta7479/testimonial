import React from "react";
import reviews from "../data";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


function Card(props){
    let review = props.reviews;
    return (
    <div className="flex m-10 flex-col justify-center items-center relative bg-white max-w-[600px] gap- rounded-md shadow-inner ... p-5 ">
        <div className="absolute rounded-full h-[80px] -top-[45px] left-[46px] w-[80px] bg-violet-900"></div>
        <div className="absolute -top-[40px] left-[40px] rounded-full">
            <img className="rounded-full h-[80px]" src={review.image}>
            </img>
        </div>
        <div className="text-2xl mt-4">
            <h3 className="name text-violet-950">
                {review.name}
            </h3>
        </div>
        <div className="text-violet-400">
            <p className="title">
                {review.job}
            </p>
        </div>
        <div className="leftquote my-3 text-violet-500"><FaQuoteLeft/></div>
        <div>
            <p className="text-sm text-gray-700">{review.text} </p>
        </div>
        <div className="rightquote my-3 text-violet-500 "><FaQuoteRight/></div>
       


    </div>
    )

}
export default Card;