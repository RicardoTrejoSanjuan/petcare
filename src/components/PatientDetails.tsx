import { usePatientStore } from "../store/store"
import type { Patient } from "../type"
import PatientDetailsItem from "./PatientDetailsItem"
import { toast } from "react-toastify";

type PatientDetailsProps = {
  patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

  const { deletePatient, getPatientById } = usePatientStore();

  const handleClick = () => {
    deletePatient(patient.id);
    toast.success('Patient has been deleted successfully!')
  }
  return (
    <div className="mx-5 my-10 px-5 py-10 rounded-lg border-l-4 border-indigo-500 bg-white p-6 shadow-md">
      <h3 className="text-xl font-semibold text-indigo-600">Patient Info</h3>
      <div className="mt-4 space-y-2">
        <PatientDetailsItem label="👤 Patient Name" data={patient.name} />
        <PatientDetailsItem label="👨‍⚕️ Owner" data={patient.caretaker} />
        <PatientDetailsItem label="✉️ Email" data={patient.email} />
        <PatientDetailsItem label="📅 Admission Date" data={patient.date.toString()} />
        <PatientDetailsItem label="📝 Symptoms" data={patient.symptoms} />
      </div>
      <div className="flex flex-col lg:flex-row gap-3 justify-between gap-3 mt-10">
        <button
          className="py-2 px-10 bg-purple-600 hover:bg-purple-800 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}>Edit</button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
          onClick={handleClick}>Delete</button>
      </div>
    </div>
  )
}
