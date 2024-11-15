import React from 'react'
import './BlogAndNewsCard.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function BlogAndNewsCard({cardPhoto,catigoryCard,date,adminPhoto,adminName,aboutAdmin}) {
    return (
        <div className='BlogAndNewsCard'>
            <div className='image-div2'>
                <img src={cardPhoto} alt="" />
            </div>
            <div className='content'>
                <div className='top-content'>
                    <div className='catigory-div'>
                        <p>{catigoryCard}</p>
                        <p>{date}</p>
                    </div>
                    <h4>life wont one beast air over above all</h4>
                </div>
                <div className='bottom-content'>
                    <div className='admin'>
                        <img src={adminPhoto} alt="" />
                        <div>
                            <p className='p1'>{adminName}</p>
                            <p>{aboutAdmin}</p>
                        </div>
                    </div>
                    <button><HiOutlineArrowNarrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default BlogAndNewsCard
