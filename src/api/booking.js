

// create payment intent

import axiosPublic from "."

export const createPaymentIntent = async(price)=>{

     const {data}= await axiosPublic.post('/create-payment-intent',price);

     return data;
}

// get all booking info

export const getAllBookingInfo= async()=>{
     const {data}= await axiosPublic('/appoint');

     return data;
}


// get booking info

export const getBookingInfo= async(email)=>{
     const {data}= await axiosPublic(`/appoint/${email}`);

     return data;
}


//  save booking info in db

export const saveBookingInfo = async(paymentInfo)=>{

     const {data}= await axiosPublic.post('/appoint',paymentInfo);

     return data;
}

// delete booking info

export const deleteBookingInfo= async(id)=>{
     const {data}= await axiosPublic.delete(`/appoints/${id}`);

     return data;
}

// // update room status after booking in db

// export const updateStatus = async(id,status)=>{

//      const {data}= await axiosPublic.patch(`/appoint/${id}`,{status});

//      return data;
// }