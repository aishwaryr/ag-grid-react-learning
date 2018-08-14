import { SET_FORM_DATA } from "./actions";

export function setFormData(formData) {
  return { type: SET_FORM_DATA, payload: formData };
}
