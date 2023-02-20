import {Link} from "react-router-dom";
import {GoLink1, GoLink2, Header} from "./styleIndex";
import {Table} from "../../Component/Table";
import {data} from "../Data";

export const Users = () => {
   const columns1 = [
       {field : "yuu" , header: "Nm"},
       {field : "rtrrr" , header: "mmm"}
   ]
    const demo = [
        {yuu:"yasmeen" , rtrrr : "tayeh" }
    ]
    return(
        <>
        <Header>
            <GoLink1><Link to="/" style={{border:"none"}}>Home/</Link></GoLink1><GoLink2><Link to="/users">Users</Link></GoLink2>
        </Header>
            <Table  columns={columns1} data={demo} />
        </>
    )
}