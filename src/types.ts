export interface ToDo {
  id: number
  title: string
  isCompleted: boolean
  isDeleted: boolean
}

export interface RegisterModel {
  fullName: string
  email: string
  password: string
}

export interface LoginModel {
  email: string
  password: string
}
