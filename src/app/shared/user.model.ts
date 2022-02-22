export interface UserModel {
  email: string,
  password?: string,
  username?: string,
  age?: string,
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string
}

