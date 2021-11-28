import React from 'react'
import logo from "../assets/img/logo.svg"
import beach from "../assets/img/beach-work.jpg"

function FirstTutorial() {
    return (
        <div className="bg-gray-100 ">
            <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
                <div className="px-8 py-12 max-w-md sm:max-w-xl lg:max-w-full mx-auto lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2">
                    <div className="xl:max-w-xl">

                    <img className="h-10 " src={logo} alt="" />
                    <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src={beach} alt="" />
                    <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl ">You can work from anywhere.
                    <br className="hidden lg:inline" />
                    <span className="text-indigo-500">Take Advantage of it</span></h1>
                    <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam ea quaerat obcaecati ab ratione quia non deserunt odit ipsa dolor quos, explicabo, quam, magni ipsam beatae distinctio doloribus commodi?
                    </p>
                    <div className="mt-4 space-x-1">
                        <a href="#" className="btn btn-primary hover:-translate-y-0.5 transform transition shadow-lg
                        ">Book Your Escape</a>
                        <a href="#" className="btn btn-secondary  ">Learn More</a>
                    </div>
                    </div>
                </div>
            <div className="hidden lg:block relative 2xl:col-span-3">
                <img className="absolute inset-0 w-full h-full object-cover object-center 2xl:object-top" src={beach} alt="" />
            </div>
            </div>
        </div>
    )
}

export default FirstTutorial
