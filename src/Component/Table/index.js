import {Table1, TableResponsive, Tbody, Td, Th, Thead, Tr} from "./styleIndex";

export const Table = ({ data=null , columns = null}) => {
    const getCaps = (head, field) => {
        if (head) return head.toUpperCase();
        return field.toUpperCase();
    };
    return(
       <div>
           <table>
               <thead>
               {columns && columns.map((head) => (
                   <th>{getCaps(head.header , head.field)}</th>
               ))}
               </thead>
               <tbody>
               {data&&data.map((row) => (
                   <tr>
                       {columns.map((col=>
                               <td>
                               {row[col.field]}
                               </td>
                       ))}
                   </tr>
               ))}
               </tbody>
           </table>
           { data ? null : <p>No Row To Show</p>}
       </div>
    )
}