import { Action } from ".";
import { SagaArgs } from "./sagas";


export interface UserProfile {
  id: number;
  name: string;
  email?: string;
  bio?: string;
  avatar?: string;
};

export interface User extends Partial<UserProfile> {
  phoneNumber: string;
  dateJoined: string;
};

export interface AuthCredentils {
  firebaseId: string;
  verificationId: string;
  accessToken: string;
  refreshToken: string;
  user: User;
};

export interface AuthState {
  isLoading: boolean;
  codeSent: boolean;
  codeVerified: boolean;
  authFlowComplete: boolean;
  credentials?: AuthCredentils;
};

interface AuthActionPayload extends Partial<AuthState>, Partial<AuthCredentils>, Partial<User> {
  args?: SagaArgs;
}

export type AuthReducer = (state: AuthState, action: Action) => void;
