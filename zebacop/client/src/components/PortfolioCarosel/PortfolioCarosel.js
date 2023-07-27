import React, { useState, useEffect } from 'react'
import { EndedProjects } from '../../APIs/UserApi'
// import "./Carosel.css"



function PortfolioCarosel() {

    const [Loading, setLoading] = useState(false)
    const [Project, SetProject] = useState([])

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        await EndedProjects().then((response) => {
            console.log("Ended..", response?.data.projects);
            SetProject(response?.data.projects)
            setLoading(false);
        });
    };

    return (

        <div className='portfolio_silder'>
            <div className="portfolio_head">
                <p>Portfolio</p>
            </div>
            <div class="slider " >
                <div class="slide-track">
                    {
                        Project?.map((obj) => {
                            return (
                                <div class="slide">
                                    <img className='slide_img' src={process.env.REACT_APP_API_URL + "/images/" + obj?.projectImage} alt="" />
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>



    )
}

export default PortfolioCarosel