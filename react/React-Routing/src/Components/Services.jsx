import React from "react";
import { useParams } from "react-router-dom";
const Services = () => {
  const params = useParams();
  return <div>Services to {params.username}</div>;
};

export default Services;
