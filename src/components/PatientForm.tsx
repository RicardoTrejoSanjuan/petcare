import { useForm } from "react-hook-form"
import Error from "./Error";
import type { DraftPatient, Patient } from "../type";
import { usePatientStore } from '../store/store'
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function PatientForm() {

    const { addPatient, activeId, patients, updatePatient } = usePatientStore();

    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<DraftPatient>();

    useEffect(() => {
        if (activeId) {
            const activePatient: Patient = patients.filter(item => item.id === activeId)[0];
            setValue('name', activePatient.name);
            setValue('caretaker', activePatient.caretaker);
            setValue('email', activePatient.email);
            setValue('date', activePatient.date);
            setValue('symptoms', activePatient.symptoms);
        }
    }, [activeId])


    const registerPatient = (data: DraftPatient) => {
        if (activeId) {
            updatePatient(data);
            toast.success('Patient has been updated successfully!')
        } else {
            addPatient(data);
            toast.success('Patient has been added successfully!');
        }
        reset();
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <div className="mx-5 bg-white border shadow rounded-lg pt-10">
                <h2 className="font-black text-3xl text-center">Patient Tracking</h2>

                <p className="text-lg mt-5 text-center mb-10">
                    Add Patients and Manage Them
                </p>

                <form
                    className="bg-white py-10 px-5 mb-10"
                    noValidate
                    onSubmit={handleSubmit(registerPatient)}
                >
                    <div className="mb-5">
                        <label htmlFor="name" className="text-sm uppercase font-bold">
                            Patient
                        </label>
                        <input
                            id="name"
                            className="w-full p-3  border border-gray-100"
                            type="text"
                            placeholder="Enter Patient Name"
                            {
                            ...register('name', {
                                required: 'Name is a required field.',
                                // maxLength: {
                                //     value: 50,
                                //     message: 'Maximum 50 characters allowed for the name'
                                // }
                            })
                            }
                        />
                        {errors.name && (
                            <Error>{errors.name?.message}</Error>
                        )}
                        {/* {errors.maxLength && (
                        <Error>{errors.maxLength?.message}</Error>
                    )} */}

                    </div>

                    <div className="mb-5">
                        <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                            Owner
                        </label>
                        <input
                            id="caretaker"
                            className="w-full p-3  border border-gray-100"
                            type="text"
                            placeholder="Enter Owner Name"
                            {
                            ...register('caretaker', {
                                required: 'Owner name is required',
                            })
                            }
                        />
                        {errors.caretaker && (
                            <Error>{errors.caretaker?.message}</Error>
                        )}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="text-sm uppercase font-bold">
                            Email
                        </label>
                        <input
                            id="email"
                            className="w-full p-3  border border-gray-100"
                            type="email"
                            placeholder="Enter Registration Email"
                            {
                            ...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Please enter a valid email address'
                                }
                            })
                            }
                        />
                        {errors.email && (
                            <Error>{errors.email?.message}</Error>
                        )}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="date" className="text-sm uppercase font-bold">
                            Admission Date
                        </label>
                        <input
                            id="date"
                            className="w-full p-3  border border-gray-100"
                            type="date"
                            {
                            ...register('date', {
                                required: 'Admission date is required.',
                            })
                            }
                        />
                        {errors.date && (
                            <Error>{errors.date?.message}</Error>
                        )}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                            Symptoms
                        </label>
                        <textarea
                            id="symptoms"
                            className="w-full p-3  border border-gray-100"
                            placeholder="Enter Patient Symptoms"
                            {
                            ...register('symptoms', {
                                required: 'Symptoms description is required.',
                            })
                            }
                        ></textarea>
                        {errors.symptoms && (
                            <Error>{errors.symptoms?.message}</Error>
                        )}
                    </div>

                    <input
                        type="submit"
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                        value='Save Patient'
                    />
                </form>
            </div>
        </div>
    )
}