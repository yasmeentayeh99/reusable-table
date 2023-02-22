import {Table} from "../../Component/Table";
import {data} from "../Data";
import {useEffect, useState} from "react";
import axios from "axios";
import {Search} from "../../Component/Search";
import {FilterProduct} from "../../Component/FilterProduct";

export const Products = () => {
    const products = data?.products ;

    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)
    const [query , setQuery ] = useState("")
    const [filterTextValue , setFilterText] = useState("all")
    const [newProductList , setNewProduct] = useState(products)
    // console.log(data?.products.filter(product => product.brand.toLowerCase().includes("fa")))


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

    const keys = ["brand" , "title" , "category"]
    const search = (products) => {
        return data?.products.filter((item) =>
         keys.some((key) => item[key].toLowerCase().includes(query))
        )
    }

    const FilterProductList = newProductList.filter((product) => {
        if (filterTextValue === 'laptop') {
            return product.category === true
        } else {
            return product
        }

    })
    const onFilterValueSelected = (filterValue) => {
        setFilterText(filterValue)
    }


    const columns = [
        {field : "id" , header: "ID"},
        {field: "title" , header: "Title"},
        {field: "brand" , header:"Brand"},
        {field: "category" , header: "Category"},
    ]


    return(
        <>
            <FilterProduct filterValueSelected={onFilterValueSelected} newProductList={FilterProductList}></FilterProduct>
            <Search type="text" placeholder="name" onChange={(e)=> setQuery(e.target.value)} />
            <Table key={data?.products.id} data={search(data?.products)} columns={columns} />
        </>
    )
}