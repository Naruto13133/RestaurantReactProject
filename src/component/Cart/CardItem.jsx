import { Chip, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CardItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center  lg:space-x-5">
        <div className="">
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg"
            alt="..."
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className=" space-y-1  lg:space-y-3 w-full">
            <p>Biryani</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  {5}
                </div>
                <IconButton>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>
          ₹12111
          </p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {[1,1,1,1].map((item) =><Chip label={"bread"}/>)}
      </div>
    </div>
  );
};

export default CardItem;
