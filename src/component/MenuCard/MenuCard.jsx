import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Category } from '@mui/icons-material';

const ingredientItems = [
  {
    category: "Nuts & Seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protine",
    ingredients: ["Ground Beef"],
  },
  {
    category: "Protine",
    ingredients: ["Bacon Strip"],
  },
];

const demo = [
  {
    category: "Nuts & Seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protine",
    ingredients: ["Ground Beef", "Bacon Strip"],
  },
];

const MenuCard = () => {

    const handelCheckboxChange=(e)=>{
      console.log(e.target.checked);
        
    }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex item-center justify-between">
          <div className="lg:flex item-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18-736x1104.jpg"
              alt="burger"
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="fond-semibold text-xl">Burger</p>
              <p>₹499</p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                cupiditate error architecto eius praesentium quis?
              </p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {demo.map((item) => (
              <div key={item.category}>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((ingredient, index) => (
                    <FormControlLabel
                      key={index}
                      control={<Checkbox onChange={handelCheckboxChange} />}
                      label={ingredient}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5 ">
            <Button type="submit" variant="contained" disabled={false}>{true?"Add To Cart":"Out Of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
