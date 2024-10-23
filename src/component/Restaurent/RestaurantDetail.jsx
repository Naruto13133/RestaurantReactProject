import React, { useState } from "react";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuCard from "../MenuCard/MenuCard";

const categories = ["piza", "bryami", "burger", "chicken", "rice"];

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vagitarian only", value: "Vagitarian" },
  { label: "Non-Vagitarian only", value: "Non_Vagitarian" },
  { label: "seasonal only", value: "seasonal" },
];

const menu = [1,1,1,1,1,1,1]

const RestaurantDetail = () => {
  const [foodType, setFoodTypes] = useState("all");
  const handelFilter = (e) => {

    setFoodTypes(e.target.value);
    
  };

  return (
    <div className="px-5 lg:px-20">
      <section className="">
        <h3 className="text-gray-500 py-2 mt-10">
          Home/india/indian fast food/3
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://wallpapercave.com/wp/jFbr83r.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://wallpapercave.com/wp/jFbr83r.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://wallpapercave.com/wp/jFbr83r.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold "> Indian Fast Food </h1>
          <p className="text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit./
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3 " s>
              <LocationOnIcon></LocationOnIcon>

              <span>Mumbai,Maharashtra, 400056.</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3 " s>
              <CalendarMonthIcon></CalendarMonthIcon>

              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                explicabo ad sunt id delectus? Aperiam, nostrum sed? Maxime,
                dignissimos tenetur.
              </span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter ">
          <div className="box space-y-5 lg:sticky top-28 ">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handelFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.label}
                      value={item.value}
                      control={<Radio />}
                      l
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider/>
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handelFilter}
                  name="food_type"
                  value={foodType}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      l
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10 ">
          {menu.map((item)=><MenuCard/>)}
          </div>
      </section>
    </div>
  );
};

export default RestaurantDetail;
