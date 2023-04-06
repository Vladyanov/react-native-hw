import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "../router";

import { useSelector, useDispatch } from "react-redux";

import { authStateChangeuser } from "../redux/auth/authOperations";

const Main = () => {
  const [user, setUser] = useState(null);
  const { stateChange } = useSelector((state) => state.auth);
  console.log(stateChange);
  const dispatch = useDispatch();

  const routing = useRoute(stateChange);

  useEffect(() => {
    dispatch(authStateChangeuser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
