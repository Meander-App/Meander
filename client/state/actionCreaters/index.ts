import { ActionType } from "../action-types"
import { Dispatch } from "redux"


export const updateCity = (city: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.changeCity,
      payload: city
    })
  }
}