import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import genresJSON from "../../../Genres.json";
import { useState } from "react";
import style from "./Tabs.module.css";
import { Swiper } from "swiper/react";
import { SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import songsList from '../../../SongsJSON.json'
import { useEffect } from "react";
import CarouselLeftNav from '../../CarouselNav/CarouselLeftNav'
import CarouselRightNav from '../../CarouselNav/CarouselRightNav'
import Cards from '../../Card/Cards'


// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const Controls = ({data}) =>{
      
    const swiper=useSwiper();
  
    useEffect(()=>{
     if(swiper){
      // console.log(swiper)
      swiper.slideTo(0,null);
     }
    },[data])
  
    return (<></>)
  
  }

  


export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const genres = genresJSON.data;
  const songs=songsList;
  const [filteredSongs, setFilteredSongs]=useState(songs)

  //console.log(genres);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("click registered");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#34c94b"
            }
          }} 
        >
          {genres.map((item) => (
            <Tab
              label={item.label}
              key={item.key}
              style={{ color: "white", fontSize: "16px", fontWeight: "600", textTransform: 'none'}}
              onClick={(e)=>{
                if(item.label!='All'){
                let songsList=songs.filter((item)=>{
                  if(item.genre.label==e.target.innerText){
                    return item
                  }
                })
                setFilteredSongs(songsList)
              }
              
              }}
            />
          ))}
        </Tabs>
      </Box>
      {genres.map((item, index) => (
        <div
          key={item.key}
          className={style.carouselWrap}
          hidden={value !== index}
          style={{ color: "white" }}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween="40px"
            slidesPerView={7}
            allowTouchMove
            style={{ padding: "20px" }}
          >
            <Controls data={songs} />
            <CarouselLeftNav />
            <CarouselRightNav />

            {filteredSongs.map((items)=>(

        <SwiperSlide key={items.id}><Cards fromTabs cardData={items} /></SwiperSlide >
            )
            )}
           

          </Swiper>
        </div>
      ))}
    </Box>
  );
}
