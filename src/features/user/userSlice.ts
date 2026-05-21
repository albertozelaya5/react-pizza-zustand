import { create } from "zustand";
import { getAddress } from "../../services/apiGeocoding";
import { UserActions, UserState } from "./userInt";

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const initialState: UserState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

export const useUser = create<UserState & UserActions>((set) => ({
  ...initialState,
  updateName: (name: string) => set((state) => ({ ...state, username: name })),
  fetchAddress: async () => {
    set({ status: "loading" });

    try {
      const positionObj = await getPosition();
      const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
      };

      const addressObj = await getAddress(position);
      const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

      set({ position, address, status: "idle" });
    } catch (err) {
      set({
        status: "error",
        error:
          "There was a problem getting your address. Make sure ti fill this field!",
      });
    }
  },
}));
