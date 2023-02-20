import {Table} from "../../Component/Table";
import {data} from "../Data";
import {useEffect, useState} from "react";
import axios from "axios";

export const Products = () => {
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(() => {
        getData();
    }, [])


     const getData = () => {
        axios(
            "https://dummyjson.com/products"
        )
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error("Error fetching data :" , error);
                setError(error)
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const columns = [
        {field : "id" , header: "ID"},
        {field: "title" , header: "Title"},
        {field: "brand" , header:"Brand"},
        {field: "category" , header: "Category"},
    ]


    return(
        <>
            <Table  data={getData} columns={columns} />
        </>
    )
}