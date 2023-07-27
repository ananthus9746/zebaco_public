import React, { useState, useEffect } from 'react'
import { getPartners } from '../../APIs/UserApi'
import "./Carosel.css"



function Carosel() {

    const [Loading, setLoading] = useState(false)
    const [partners, setPartners] = useState([])

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        await getPartners().then((response) => {
            console.log("partners..", response.data.getedPartners);
            setPartners(response.data?.getedPartners)
            // setGridData(response.data.getedPartners);
            setLoading(false);
        });
    };

    return (
        <div class="slider">
            <div class="slide-track">
                {
                    partners.map((obj) => {
                        return (
                            <div class="slide">
                                <img className='slide_img' src={process.env.REACT_APP_API_URL + "/images/" + obj?.PartnerImage} alt="" />
                            </div>
                        )
                    }
                    )
                }


            </div>
        </div>
    )
}

export default Carosel