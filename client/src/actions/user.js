import axios from "axios"
import { LOAD_USER, LOGOUT, VERIFY_MAIL } from "./types"
import { displayAlert } from "./misc"
const url = process.env.URL

export const loadUser = () => dispatch => {
	axios
		.get(url + "/settings", { withCredentials: true })
		.then(res => {
			console.log(res)
			dispatch({
				type: LOAD_USER,
				payload: res.data.result,
			})
		})
		.catch(err => {
			dispatch(displayAlert(err.response.data.error, "danger"))
			dispatch({
				type: LOGOUT,
			})
		})
}

export const verifyEmail = () => dispatch => {
	axios
		.post(url + "/settings/verifyemail", { withCredentials: true })
		.then(res => {
			dispatch(
				displayAlert(
					"Please check you mail box to complete verification",
					"success"
				)
			)
		})
		.catch(err => {
			dispatch(
				displayAlert(
					"Failed to sent verification mail. Please try again later",
					"danger",
					true
				)
			)
		})
}
