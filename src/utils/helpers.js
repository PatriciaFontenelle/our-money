import { apiClient } from "../service/api";
import { redirect } from "react-router";

export const setLocalStorage = (key, data) => {
  window.localStorage.setItem(key, data);
};

export const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

export const logOut = () => {
  window.localStorage.clear();
  redirect("/login");
};

export const formatCurrency = (value) => {
  const number = parseFloat(value);
  return number.toLocaleString("pt-PT", { style: "currency", currency: "EUR" });
};

export const openModal = (id) => {
  const modal = document.getElementById(id);
  modal?.showModal();
};
