import React,{useState} from 'react';
import {Table} from "react-bootstrap";
import Data from './employeedata.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from "@material-ui/icons/Search";
import {TextField} from "@material-ui/core";
import './GridTable.css';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";


const GridTable= () => {
    const[search,setSearch] = useState('');
    return (
    <>
        <div className="GridTableContainer col-lg-12 col-md-12 col-sm-12">
            {/* <input 
            type="text" 
            InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            
            placeholder="Search for the records in the table..." 
            onChange={event=>{setSearch(event.target.value)} } />  */}
            <TextField className="textField"
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    ),disableUnderline: true 
                }}
                placeholder="Search for the records in the table..." 
                onChange={event=>{setSearch(event.target.value)} }
            />

            <br/>
                            {/* <Table striped bordered hover variant="dark"> */}
                            <div>
                                <Table className="table" striped bordered hover variant="dark" size="sm">
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Designation</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone No.</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                        Data.filter((val)=>{
                                            if(search === ""){
                                                return val;
                                            }
                                            else if(val.id.toLowerCase().includes(search.toLowerCase())){
                                                return val;
                                            }
                                            else if(val.designation.toLowerCase().includes(search.toLowerCase())){
                                                    return val;
                                            }
                                            else if(val.firstName.toLowerCase().includes(search.toLowerCase())){
                                                return val;
                                            }
                                            else if(val.lastName.toLowerCase().includes(search.toLowerCase())){
                                                return val;
                                            }
                                            else if(val.phoneNumber.toLowerCase().includes(search.toLowerCase())){
                                                return val;
                                            }
                                            else if(val.emailAddress.toLowerCase().includes(search.toLowerCase())){
                                                return val;
                                            }
                                            else if(val.country.toLowerCase().includes(search.toLowerCase())){
                                                return val;
                                            }
                                            else if(val.state.toLowerCase().includes(search.toLowerCase())){
                                                return val;
                                            }
                                        }).map(postEmployees => {
                                            return(
                                                <tr>
                                                <td>{postEmployees.id}</td>
                                                <td>{postEmployees.designation}</td>
                                                <td>{postEmployees.firstName}</td>
                                                <td>{postEmployees.lastName}</td>
                                                <td>{postEmployees.phoneNumber}</td>
                                                <td>{postEmployees.emailAddress}</td>
                                                <td>{postEmployees.country}</td>
                                                <td>{postEmployees.state}</td>
                                                </tr>
                                            )
                                            }
                                        ) 
                                        }          
                                </tbody>
                                </Table>
                            </div>
        </div>
    </>
    )
}

export default GridTable
