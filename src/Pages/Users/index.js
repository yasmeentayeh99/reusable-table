import {Link} from "react-router-dom";
import {GoLink1, GoLink2, Header} from "./styleIndex";
import {Table} from "../../Component/Table";
import {data} from "../Data";
import {useEffect, useState} from "react";
import axios from "axios";

export const Users = () => {
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(() => {
        getData();
    }, [])


    const getData = () => {
        axios(
            "https://dummyjson.com/users"
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
        // {field : "id" , header: "ID"},
        {field: "firstName" , header: "firstName"},
        {field: "lastName" , header:"lastName"},
        {field: "maidenName" , header: "maidenName"},
        {field: "age" , header: "age"},
        {field: "gender" , header: "gender"},
        {field: "email" , header: "email"},
        {field: "username" , header: "username"},
        {field: "bloodGroup" , header: "bloodGroup"},
        {field: "eyeColor" , header: "eyeColor"},
    ]

    return(
        <>
        <Header>
            <GoLink1><Link to="/" style={{border:"none"}}>Home/</Link></GoLink1><GoLink2><Link to="/users">Users</Link></GoLink2>
        </Header>
            <Table  data={data?.users} columns={columns} />
        </>
    )
}