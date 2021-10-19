import { useEffect, useState } from "react"

const useFackData = () => {

    const useServices = () => {
        const [services, serServices] = useState([]);

        useEffect(() => {
            fetch('/services.json')
                .then(res => res.json())
                .then(data => {
                    serServices(data);
                }).catch(err => {
                    console.log(err.message);
                })
        }, [])

        return services;
    }

    const useDoctors = () => {
        const [doctors, serDoctors] = useState([]);

        useEffect(() => {
            fetch("./team.json")
                .then(res => res.json())
                .then(data => serDoctors(data))
                .catch(err => {
                    console.log(err.message);
                })


        }, [])

        return doctors;

    }


    return {
        useServices,
        useDoctors
    }

}


export default useFackData;