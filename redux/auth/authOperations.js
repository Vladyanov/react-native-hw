import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    // const state = getState();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
      });
      const { uid, displayName } = auth.currentUser;

      dispatch(
        updateUserProfile({
          userId: uid,
          nickname: displayName,
        })
      );
      //   console.log("user: ", user);
    } catch (error) {
      "error:", error;
      console.log("error:", error);
      console.log("error massage:", error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("user: ", user);
    } catch (error) {
      "error:", error;
      console.log("error:", error);
      console.log("error massage:", error.message);
    }
  };

export const authSignOutUser = () => async (dispath, getState) => {
  try {
    await signOut(auth);
    dispatch(authSignOut());
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};

export const authStateChangeuser = () => async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user) {
        const userUpdateProfile = {
          userId: user.uid,
          nickname: user.displayName,
          // email: user.email,
        };
        dispatch(
          updateUserProfile({
            ...userUpdateProfile,
          })
        );
        dispatch(authStateChange({ stateChange: true }));
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
