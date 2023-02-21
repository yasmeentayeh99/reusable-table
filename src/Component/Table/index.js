import {Table1, TableResponsive, Tbody, Td, Th, Thead, Tr} from "./styleIndex";
import {useState} from "react";
// import Pagination from "../Pagination";
// import {useTable} from "../../Hooks/useTable";
// import TableFooter from "../TableFooter";

export const Table = ({ data=null , columns = null , rowsPerPage}) => {
    // const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState(1);
    // const { slice, range } = useTable(data, page, rowsPerPage);

    const getCaps = (head, field) => {
        if (head) return head.toUpperCase();
        return field.toUpperCase();
    };
    return(
        <>
       <div>
           <table>
               <thead>
               {columns && columns.map((head) => (
                   <th>{getCaps(head.header , head.field)}</th>
               ))}
               </thead>
                   <tbody>
                   {/*{slice.map((el) => (*/}
                   {/*    <span>*/}
                 {data&&data.map((row) => (
                   <tr>
                       {columns.map((col=>
                               <td>
                               {row[col.field]}
                               </td>
                       ))}
                   </tr>
                       ))}
                       {/*</span>*/}
                       {/*))}*/}
               </tbody>
           </table>
           { data ? null : <p>No Row To Show</p>}
       </div>
            {/*<TableFooter range={range} slice={slice} setPage={setPage} page={page} />*/}
        {/*/>*/}
            </>
    )
}