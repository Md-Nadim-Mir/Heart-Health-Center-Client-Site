import axiosPublic from "."


//  save user into database when regiter go to register route
export const savUser = async(user)=>{

     const currentUser= {

          email: user.email,
          name : user.name,
          image: user.image,
          blood: user.blood,
          role: 'user',
          status: 'active'
     }

     const data= await axiosPublic.put(`/users/${user?.email}`,currentUser);


     return data;
}


// get token when regiter

export const getToken= async (email)=>{


    const data= await axiosPublic.post('/jwt',email);

      console.log(' token received from server -------> ' , data)
     return data;

     
}


// navbar when press logut button , clear cookie

export const clearCookie = async ()=>{

    const {data}= await axiosPublic.get('/logout')

      return data;
}

