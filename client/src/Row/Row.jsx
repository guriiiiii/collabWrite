import React from 'react';
import "./row.css"
import { HiMiniDocumentText } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function Row(doc) {
  function dateFormat(doc){
    const dateString = doc.doc.date;
    const date = new Date(dateString);

    // Get the date components (year, month, and day)
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month starts from 0, so add 1
    const day = date.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    return formattedDate;
  }
  return (
    <Link to={`/documents/${doc.doc._id}`}>
      <div className='row'>
        <div className='rowSection'>
          <div className='file'>
            <HiMiniDocumentText className='icon'/>
            <p className='fileName'>{doc.doc.name}</p>
          </div>
          <p className='date'>{dateFormat(doc)}</p>
      </div>
      </div>
    </Link>
    
  )
}

export default Row
