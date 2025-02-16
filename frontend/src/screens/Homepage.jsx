import React from "react";
import { Carousel } from "@material-tailwind/react";
import Card from "../components/Card";
const Homepage = () => {
  return (
    <>
      <Carousel
        autoplay={true} 
        autoplayDelay={3000} 
        loop={true} 
        transition={{ type: "tween", duration: 0.5 }} 
      >
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="image 1"
          className="h-[70vh] w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1565402170291-8491f14678db?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="image 2"
          className="h-[70vh] w-[100%] object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="image 3"
          className="h-[70vh] w-full object-cover"
        />
      </Carousel>

<div className="text-center mt-10">
<h1>TOP RATED PROPERTIES</h1>
</div>
<div className="flex flex-wrap gap-5 justify-center flex-row mx-auto">
  
  <Card/>

</div> 
    </>
  );
};

export default Homepage;
