import axios from "axios";

export const UploadImage = async (image) => {

    const formData = new FormData();
    formData.append('image', image);

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${'3647367f5c02623b1975a500264cfc95'}`, formData);

    return data;
}