import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = () => {
  return (
    <Card className=" w-[18rem] restaurentCard">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src=""
          alt=""
        />
         <Chip
        size="small"
        className="absolute top-2 left-2"
        color={true ? "success" : "error"}
        label={true ? "open" : "closed"}
      ></Chip>
      <div className="p-4 textpar flex w-full justify-between">
        <div className=" space-y-1">
          <p className=" font-semibold text-lg">Indian fastfood</p>
          <p className=" text-gray-500 text-sm ">
            Craving it all? dive into our global fla.....
          </p>
        </div>
        <div className="">
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
      </div>
     
    </Card>
  );
};

export default RestaurantCard;
