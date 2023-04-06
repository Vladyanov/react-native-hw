import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import Svg, { Path } from "react-native-svg";

import { authSignOutUser } from "../../redux/auth/authOperations";

const SvgLogout = (props) => {
  const dispatch = useDispatch();

  const singOut = () => {
    dispatch(authSignOutUser());
  };

  return (
    <TouchableOpacity style={styles.btnLogOut} onPress={singOut}>
      <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5M17 16l4-4-4-4M21 12H9"
          stroke="#BDBDBD"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnLogOut: {
    marginRight: 15,
  },
});

export default SvgLogout;
