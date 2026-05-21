export type UserState = {
  username: string;
  status: "idle" | "error" | "loading";
  position:
    | {
        latitude?: number;
        longitude?: number;
      }
    | {};
  address: string;
  error: string;
};

export type UserActions = {
  updateName: (arg1: string) => void;
  fetchAddress: () => Promise<void>;
};
