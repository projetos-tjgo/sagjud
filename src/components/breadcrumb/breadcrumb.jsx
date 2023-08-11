import React from 'react';
import { Link } from 'react-router-dom';

export default function BreadcrumbSag(props){
    return (
        <>
        <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>					
        <li className="breadcrumb-item active">{props.nome}</li>
    </ol>
    <h1 className="page-header"><b>{props.nome}</b></h1>
    </>
    )
}