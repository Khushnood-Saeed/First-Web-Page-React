import React from "react";
import { Media } from "reactstrap";

function RenderLeader(props) {

  const leaderToShow=props.leader.map((lead)=>{
return(
<Media className="row">
      <Media left middle className="col-3"  href="#">
        <Media
          object
          src={lead.image}
          alt="Image"
        />
      </Media>
      <Media body  className="ml-5 col-9">
        <Media heading>{lead.name}</Media>
        {lead.description}
      </Media>
    </Media>
  )})
  

  return (
    leaderToShow
  );
}

export default RenderLeader;
