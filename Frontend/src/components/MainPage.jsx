import React, { useState } from "react";
import '../stylesheets/MainPage.css'
import Card from "./Card";
import Filters from "./Filters";

function MainPage() {

    /*al inicio filtra 30 ultimos dias, todas las marcas, todos los channels
    cada vez que cambian los datos de filtro -> setFilter(true)
    useEffect envia los nuevos valores de filtro a Card

    */
    
    const [filters, setFilters] = useState({})

    const handleFiltersChange = (newFilters) => {
        setFilters(newFilters)
    }


    return(
        <div>
            
            <div className="card-container-fluid">
                <div className="row">
                    <div className="col-md-12 col-xl-6">
                        <Filters /*onfiltersChange={handleFiltersChange}*//>

                    </div>
                    <div className="col-md-6 col-xl-3">
                        <Card filters={filters}/>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <Card filters={filters}/>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        </div>
    )
}

export default MainPage;