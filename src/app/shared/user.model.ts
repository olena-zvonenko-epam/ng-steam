export interface UserModel {
  email: string,
  password?: string,
  displayName?: string,
  age?: string,
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string,
  expiresIn: string,
  localId: string
}

