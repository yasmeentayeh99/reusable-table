import {Table} from "../../Component/Table";
import {data} from "../Data";
import {useEffect, useState} from "react";
import axios from "axios";
import {Search} from "../../Component/Search";

export const Products = () => {
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)
    const [query , setQuery ] = useState("")
    // const [searchParam] = useState()

    console.log(data?.products.filter(product => product.brand.toLowerCase().includes("fa")))

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
            <Search type="text" placeholder="name" onChange={(e)=> setQuery(e.target.value)} />
            {data?.products.filter((product) =>
                product.brand.toLowerCase().includes(query)

            <Table key={data?.products.id} data={data?.products} columns={columns} />
                ))}
        </>
    )
}