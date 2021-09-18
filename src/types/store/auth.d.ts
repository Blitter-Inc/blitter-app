import { Action } from ".";


export interface User {
  phoneNumber: string;
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
  credentials?: AuthCredentils;
};

interface AuthActionPayload extends Partial<AuthState>, Partial<AuthCredentils>, Partial<User> {
  args?: any;
}

export type AuthReducer = (state: AuthState, action: Action) => void;
