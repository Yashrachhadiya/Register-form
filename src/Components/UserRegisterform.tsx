import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  firstname: string;
  lastname: string;
  mobilenumber: string;
  email: string;
  aadharnumber: string;
  transportPreference: string;
}

const schema = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Za-z]+$/, { message: "Only alphabets are allowed" })
    .required("First name is required"),
  lastname: yup
    .string()
    .matches(/^[A-Za-z]+$/, { message: "Only alphabets are allowed" })
    .required("Last name is required"),
  mobilenumber: yup
    .string()
    .matches(/^[0-9]{10}$/, {
      message: "Mobile number must be 10 digits long and only in numbers",
    })
    .required("Mobile number is required"),
  email: yup
    .string()
    .email("please enter valid email adress")
    .required("Email is required"),
  aadharnumber: yup
    .string()
    .matches(/^[0-9]{12}$/, {message: "Aadhar Number only containts 12 digits"})
    .required("Aadhar number is required"),

    transportPreference: yup.string().required("Transport preference is required"),
});

export const UserRegisterform: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
   <>
    <div className="max-w-screen-xl mx-auto mt-5 ">
      <div className="container mx-auto px-5">
        <h3 className="text-xl py-5 font-bold">Personal Details</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-xl font-semibold mb-2"
                htmlFor="firstname"
              >
                Firstname :
              </label>
              <Controller
                name="firstname"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      className="border-b border-black focus:border-blue-500 focus:outline-none w-full px-3 py-2 rounded-md"
                    />
                    {errors.firstname && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.firstname.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label
                className="block text-xl font-semibold mb-2"
                htmlFor="lastname"
              >
                Lastname :
              </label>
              <Controller
                name="lastname"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      className="border-b border-black focus:border-blue-500 focus:outline-none w-full px-3 py-2 rounded-md"
                    />
                    {errors.lastname && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.lastname.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <br />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                className="block text-xl font-semibold mb-2"
                htmlFor="mobilenumber"
              >
                Mobile Number :
              </label>
              <Controller
                name="mobilenumber"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      className="border-b border-black focus:border-blue-500 focus:outline-none w-full px-3 py-2 rounded-md"
                    />
                    {errors.mobilenumber && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.mobilenumber.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label
                className="block text-xl font-semibold mb-2"
                htmlFor="email"
              >
                Email :
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      className="border-b border-black focus:border-blue-500 focus:outline-none w-full px-3 py-2 rounded-md"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <br />
          <br />
          <h3 className="text-xl py-5 font-bold">Other Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-xl font-semibold mb-2"
                htmlFor="aadharnumber"
              >
                Aadhar Number :
              </label>
              <Controller
                name="aadharnumber"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      className="border-b border-black focus:border-blue-500 focus:outline-none w-full px-3 py-2 rounded-md"
                    />
                    {errors.aadharnumber && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.aadharnumber.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            
            <br />
          </div>
          <br />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
                <br />
        </form>
      </div>
    </div>
   </>
  );
};
