import react, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import Home from "./pages/Landing/Home/Home";
import Stamp from "./pages/Landing/Home/Ratiings/Stamp";
import Text from "./pages/Landing/Home/Ratiings/text";
import Test from "./pages/helpers/Test";
import About from "./pages/Landing/About/About";
const App = () => {
  const { email } = useSelector((state) => state.auth.user_details);
  const props = { email };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="testing" element={<Test />} />
        <Route path="/public/about" element={<About />} />
        {/* <Route path="public/about" element={<About />} />
        <Route path="public/markets" element={<Market />} />
        <Route path="/public/login" element={<Loginx />} />
        <Route path="/public/register" element={<Registerx />} />
        <Route path="/public/activate" element={<Activate />} />
        <Route path="/on-activate/:email" element={<SetActivate />} />
        <Route path="/user/dashboard" element={<Dashboardx />} />
        <Route path="/user/deposit" element={<Deposit />} />
        <Route path="/user/withdraw" element={<Withdraw />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/admin/users" element={<AllUsers />} />
        <Route path="/admin/withdrawals" element={<Withdrawal />} />
        <Route path="/admin/edituser" element={<EditUsers />} />
        <Route path="/admin/deposits" element={<UserDep />} />
        <Route path="/public/forgot-password" element={<ResetPassword />} />
        <Route path="/user/T&C" element={<TC />} />
        <Route path="/user/btc/withdrawal" element={<BtcWld />} />
        <Route path="/user/skrill/withdrawal" element={<SkrillWld />} />
        <Route path="/user/paypal/withdrawal" element={<PaypalWld />} /> */}
      </Routes>
    </div>
  );
};

export default App;
