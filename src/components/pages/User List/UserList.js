import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../../DummyData';
import { Link } from 'react-router-dom';


export default function UserList() {
    const [ data , setData ] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        {
            field: 'user',
            headerName: 'user',
            width: 150,
            editable: true,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={params.row.avatar} className='userListImg' alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'E-mail',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
            editable: true,
        },
        {
            field: 'transactions',
            headerName: 'Total Transaction',
            sortable: false,
            width: 220,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell : (params)=>{
                return(
                    <>
                        <Link to={'/user/'+ params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        
                        </Link>
                        <DeleteOutline 
                            className='userListDelete' 
                            onClick = { () => 
                                handleDelete(params.row.id)
                            } 
                        />
                    </>
                )
            }
        },
    ];

    
    return (
        <div className='userList'>
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
            />
        </div>
    )
}
