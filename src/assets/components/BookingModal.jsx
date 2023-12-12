import { Dialog, Transition } from '@headlessui/react'


import { Fragment } from 'react'

// stripe
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51OHWHnGZFJ26zlNRk9hVexxfptsxRiK3P8qyYt7w0vV3YC0myGFWpI5qiHRA4nLgu0QIC3dka2H6ewFSFy9MsIiV00o3d5jMzu');
// stripe


const BookingModal = ({ closeModal, isOpen, bookingInfo }) => {

    console.log(bookingInfo)

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Review Info Before Appointment

                                </Dialog.Title>



                                <div className='font-bold text-black mt-10'>
                                    <p className='text-sm '>
                                        User Name : {bookingInfo.user_name}
                                    </p>
                                </div>



                                <div className='mt-2 font-bold text-black'>
                                    <p className='text-sm '>
                                        Disease Name : {bookingInfo.disease_name}
                                    </p>
                                </div>


                                <div className='mt-2 font-bold text-black'>
                                    <p className='text-sm '>
                                        Doctor Name : {bookingInfo.doctor_name}
                                    </p>
                                </div>




                                <div className='mt-2 font-bold text-black'>
                                    <p className='text-sm '>
                                        Visit Fee : ${bookingInfo.doctor_visit_fee}
                                    </p>
                                </div>


                                <div className='mt-2 font-bold text-black'>
                                    <p className='text-sm '>
                                        Time & Date : {bookingInfo.time} &  {bookingInfo.date}
                                    </p>
                                </div>


                                <hr className='mt-8 ' />

                                {/* Card data form */}

                            

                                <Elements stripe={stripePromise}>
                                    <CheckoutForm closeModal={closeModal} bookingInfo={bookingInfo} />
                                </Elements>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default BookingModal