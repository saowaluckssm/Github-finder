import React from 'react';
import propTypes from 'prop-types';
import { Link}  from "react-router-dom";


 const userItem = ({user: {login, avatar_url, html_url}}) => {
    
    return (
      <div className="card text-center">
        <img src={avatar_url} 
        alt="" 
        className="round-img" 
        style={{width: "60px"}}
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
        
      </div>
    )
  
}

userItem.propTypes = {
  user: propTypes.object.isRequired,
}



export default userItem
