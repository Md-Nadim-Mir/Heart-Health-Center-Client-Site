import axiosPublic from ".";


// export all test info
export const getAllTest = async () => {

    const { data } = await axiosPublic('/all_tests');

    return data;
}


// export single test info

export const singleTest = async (id) => {

    const { data } = await axiosPublic(`/all_tests/${id}`);

    return data;
}


// delete single test from database
export const deleteTest = async (id) => {

    const { data } = await axiosPublic.delete(`/all_tests/${id}`);

    return data;
}


// export all users data

export const allUser = async () => {

    const { data } = await axiosPublic('/users');

    return data;
}





export const deleteUserData = async (email) => {

    const { data } = await axiosPublic.delete(`/users/${email}`);

    return data;
}


// find user role

export const getUserRole = async (email) => {

    const { data } = await axiosPublic.get(`/users/${email}`);

    return data.role;
}



//  doctor add , delete , get related api 


//   👍 get method 

export const getDoctor = async () => {

    const { data } = await axiosPublic.get('/doctors');

    return data;
}


//  get doctors by id

export const getDoctorsId = async (id) => {

    const { data } = await axiosPublic.get(`/doctors/${id}`);

    return data;
}

//   👍 post method 

export const postDoctor = async () => {

    const { data } = await axiosPublic.post('/doctors');

    return data;
}

//   👍 delet method 

export const deleteDoctor = async (id) => {

    const { data } = await axiosPublic.delete(`/doctors/${id}`);

    return data;
}


//  doctor add , delete , get related api end


//  blogs add , delete , get related api 


//   👍 get method 

export const getBlogs = async () => {

    const { data } = await axiosPublic.get('/blogs');

    return data;
}

//  get blogs by id

export const getBlogsId = async (id) => {

    const { data } = await axiosPublic.get(`/blogs/${id}`);

    return data;
}

//   👍 post method 

export const postBlogs = async () => {

    const { data } = await axiosPublic.post('/blogs');

    return data;
}

//   👍 delet method 

export const deleteBlogs = async (id) => {

    const { data } = await axiosPublic.delete(`/blogs/${id}`);

    return data;
}


//  doctor add , delete , get related api end

