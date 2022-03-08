import React, { useState, useEffect } from 'react';
import "./css/style.css";
const MainApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Firozpur");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f3c2fabf8fece06974a51f8cd603faa2
            `;
            const response = await fetch(url);
            console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    }, [search])

    return (
        <>

            <div className="box">
                <div className="inputData">
                    <input
                        
                        type="search"
                        className="inputField"
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>


                {!city ? (<p className="error-message">No Data Found</p>) : (
                    <div>
                    <div className="info">

                        <h2 className="location">
                            <i className="fa-solid fa-street-view"></i>{search}
                        </h2>

                        <h1 className="temp">
                            {city.temp} Cel
                        </h1>

                        <h3 className="tempmin_max h-bar">
                            Min : {city.temp_min} Cel | Max : {city.temp_max} Cel
                        </h3>
                    </div>

                    <div className="wave1"></div>
                    <div className="wave2"></div>
                    <div className="wave3"></div>
                    </div>
                )}



                

            </div>
        </>
    );
}

export default MainApp;