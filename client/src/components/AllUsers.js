import { Table, TableBody, TableCell, TableHead ,TableRow,styled,Button} from "@mui/material"
import React ,{useEffect,useState} from "react"
import { getUsers } from "../service/api"


const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;


const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers=()=>{

const [users,setUser]=useState([])

    useEffect(()=>{
      getAllUsers()
    },[])

    const getAllUsers=async()=>{
       let response= await getUsers()
       setUser(response.data)
       
    }
    return(
       <StyledTable>
            <TableHead>
              <THead>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>

                <TableCell>Email</TableCell>

                <TableCell>Bio</TableCell>
                <TableCell>Edit and Delete</TableCell>
                

              </THead>
            </TableHead>
            <TableBody>
           {
            users.map(user=>(
                <TRow>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.bio}</TableCell>
                  <TableCell>
                    <Button variant="contained" style={{marginRight:10}}>Edit</Button>
                    <Button variant="contained" color="secondary">Delete</Button>
                  </TableCell>
                </TRow>
            ))
           }
            </TableBody>

       </StyledTable>
    )
}


export default AllUsers