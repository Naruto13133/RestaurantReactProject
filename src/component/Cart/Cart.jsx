import { Box, Button, Card, Divider, Modal, Typography, TextField } from "@mui/material";
import React from "react";
import CardItem from "./CardItem";
import AddressCart from "./AddressCart";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const item = {};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};

const validationSchema = Yup.object({
  streetAddress: Yup.string().required("Street address is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string().required("Pincode is required").matches(/^[0-9]{6}$/, "Invalid pincode"),
  city: Yup.string().required("City is required")
});

const Cart = () => {
  
  const handleSubmit=(values) => {
    console.log("Form Values:", values);
    handleClose();
  }
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpenAddressModal = () => setOpen(true);

  const createOderUsingSelectedAddress = () => {};

  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {[1, 1].map((item, index) => (
            <CardItem key={index} />
          ))}
          <Divider />
          <div className="billdetail text-sm px-5">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹24222</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>₹40</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Platform Fee</p>
                <p>₹21</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST & Restaurant Charges</p>
                <p>₹12</p>
              </div>
              <Divider />
              <div className="flex justify-between text-gray-400">
                <p>Total Pay</p>
                <p>₹3331</p>
              </div>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex flex-wrap gap-5 justify-center">
              {[1, 1, 1].map((i, index) => (
                <AddressCart
                  key={index}
                  handleSelectAddress={createOderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="text-gray-500 space-y-3">
                  <h1 className="font-semibold text-white text-lg">
                    Add New Address
                  </h1>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    ADD
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form>
                <Typography variant="h6" gutterBottom>
                  Add New Address
                </Typography>
                <div className="space-y-3">
                <Field
                  as={TextField}
                  name="streetAddress"
                  label="Street Address"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.streetAddress && Boolean(errors.streetAddress)}
                  helperText={touched.streetAddress && errors.streetAddress}
                />
                <Field
                  as={TextField}
                  name="city"
                  label="City"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                />
                <Field
                  as={TextField}
                  name="state"
                  label="State"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.state && Boolean(errors.state)}
                  helperText={touched.state && errors.state}
                />
                <Field
                  as={TextField}
                  name="pincode"
                  label="Pincode"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.pincode && Boolean(errors.pincode)}
                  helperText={touched.pincode && errors.pincode}
                />
                </div>
                <div className="mt-3">
                <Button type="submit" variant="contained" fullWidth>
                  Submit
                </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
