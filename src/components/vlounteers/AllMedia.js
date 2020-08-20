import React, { useState, useEffect } from "react";
import address from "../utils/address";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ReactPlayer from 'react-player'


const AllMedia =(props)=>{
const [allMedia , setAllMedia] = useState([])
const propsImages = props.images
const propsvideos = props.videos
   
   useEffect(() => {
    
    fillMediaArray(propsImages , propsvideos )
 
      } , [props])
/**this function call after componentDidMount to join two videos and images in one array, and add new attribute type 'image'/'video'   */
   /**
    * 
    */
 const fillMediaArray =(propsImages, propsvideos)=>{
        let images = propsImages
        let videos = propsvideos
        let allMedia = []

//     /**fill array with default Image if its not null */


    if(images.length > 0 )
    {
        images.map((image) =>{

        allMedia.push({
          type :'image',
          id : image.id,
          name : image.name
        })
      
      })
    }
    
    if(videos.length > 0)
    {
        videos.map((video) =>{

      allMedia.push({
        type :'video',
        id : video.id,
        name : video.name
      })
    
    })
  }
  setAllMedia(allMedia)
  console.log(allMedia)
 }
   
    return (
                 <div class="blog-posts single-post">
                  <article class="post clearfix mb-0">
                    <div class="entry-header">
                       {/**check if  all media has image other than default image */}
                  
                     <Carousel  
                          slidesPerScroll={1}
                          //autoPlay={6000}
                          rtl
                          arrowLeft={
                            <i
                              className="fa fa-chevron-right fa-2x"
                              style={{ margin:"10px" }}
                            />
                          }
                          arrowRight={
                            <i
                              className="fa fa-chevron-left fa-2x"
                              style={{ margin: "10px" }}
                            />
                          }
                          addArrowClickHandler
                          // animationSpeed={1000}
                          infinite
                          clickToChange
                          centered
                          breakpoints={{
                            1000: {
                              // these props will be applied when screen width is less than 1000px
                              slidesPerPage: 2,
                              clickToChange: false,
                              centered: false,
          
                              infinite: false,
                            },
                            500: {
                              slidesPerPage: 1,
                              slidesPerScroll: 1,
                              clickToChange: false,
                              centered: false,
                              animationSpeed: 2000,
                              infinite: false,
                            },
                          }} >

                  {allMedia.map((media) =>(
                    media.type === 'image'?(
                            <div
                              class="post-thumb thumb"
                              style={{ mxaHeight: "500px" }} >
                              <img
                                src={`${address()}voulenter-page/${media.name}/image`}
                                className="img-fullwidth img-responsive"
                                alt=""
                                style = {{height:'400px'}}
                              />
                            </div>
                      ):
                      (
                        <div>
                              
                    
                        <ReactPlayer 
                                      controls = {true}
                                      playIcon
                                      className="img-fullwidth img-responsive"
                                     
                                      url = {`${address()}voulenter-page/${media.name}/video`}
                                       />
                        </div>
                      )
                        ))
                  }
                        
                            </Carousel>

                    </div>
                    </article>
                    </div>
              
       
    );
  }

export default AllMedia;
