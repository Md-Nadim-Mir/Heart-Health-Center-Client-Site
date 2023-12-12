
import ReactDOM from 'react-dom/client'


import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './assets/Routes/Routes';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';

import  { Toaster } from 'react-hot-toast';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>


    <AuthProvider>

    <Toaster />

      <HelmetProvider>

    
          <RouterProvider router={router} />
   

      </HelmetProvider>

    </AuthProvider>



 </QueryClientProvider>

)
