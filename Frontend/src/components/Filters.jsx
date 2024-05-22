import React, {useState} from 'react'
import '../stylesheets/Filters.css'

function Filters() {

    const Filters = ({onFiltersChange}) => {
        const handleFiltersChange = (filters) => {
            onFiltersChange(filters)
        }
    }

    

    return(
        <div className="filters-container-fluid">
            <div className='row'>
                <div className="col-md-12 col-xl-6">
                    <p>row 1 columna 1</p>
                </div>
                <div className="col-md-12 col-xl-6">
                    <p>row 1 columna 2</p>
                </div>
            
                <div className="col-md-12 col-xl-6">
                    <p>row 2 columna 1</p>
                </div>
                <div className="col-md-12 col-xl-6">
                    <p>row 2 columna 2</p>
                </div>
            </div>
        </div>
  )
    
    /*(
        
            
            //<button onClick={() => handleFiltersChange(filters)}>Aplicar Filtros</button>
            <div class="dropdown-form-check">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul class="dropdown-menu">
            <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                <label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
                 </label>
                </div>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
    )*/

}

export default Filters;