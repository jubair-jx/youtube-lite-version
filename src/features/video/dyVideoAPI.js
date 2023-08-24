import axios from "axios";
import axiosInstance from "../../utils/axios";

export const getDyVideo = async (id) => {
  const response = await axiosInstance.get(`/videos/${id}`);
  return response.data;
};
