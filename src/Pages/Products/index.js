import {Table} from "../../Component/Table";
import {data} from "../Data";
import {useEffect, useState} from "react";
import axios from "axios";
import {Search} from "../../Component/Search";
import {FilterProduct} from "../../Component/FilterProduct";

export const Products = () => {
    // const products = data?.products ;

    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)
    const [query , setQuery ] = useState("")
    const [filteredData, setFilteredData] = useState([]);
    const [selectedField, setSelectedField] = useState('name');
    const [filterParam, setFilterParam] = useState(["title"]);
    const [searchParam] = useState(["title", "brand"]);

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
    const Filterd = () => {
        return data?.products.filter((item) => {
            console.log(filterParam , item)
            if (item.brand === filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    );
                })
            } else if (filterParam === "title") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    );
                });
            }
        } )
    }

    const onChangeFilter = (e) => {
       return Filterd(e.target.value)}


    const columns = [
        {field : "id" , header: "ID"},
        {field: "title" , header: "Title"},
        {field: "brand" , header:"Brand"},
        {field: "category" , header: "Category"},
    ]


    return(
        <>
            <select onChange={Filterd}>
            <option value="title">Title</option>
            <option value="brand">Brand</option>
            </select>
            <Search type="text" placeholder="name" onChange={(e)=> setQuery(e.target.value)} />
            <Table key={data?.products.id} data={search(data?.products)} columns={columns} />
        </>
    )
}