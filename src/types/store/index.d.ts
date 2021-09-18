import { AuthActionPayload } from ".";

export type ActionPayload = AuthActionPayload   // Add & to combine multiple ActionPayloads

export interface Action {
  type: string;
  payload?: ActionPayload;
};

export {
  User,
  AuthActionPayload,
  AuthCredentils,
  AuthReducer,
  AuthState,
} from "./auth";
