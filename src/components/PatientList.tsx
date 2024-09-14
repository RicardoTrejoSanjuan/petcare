import { usePatientStore } from "../store/store"
import PatientDetails from "./PatientDetails";

export default function PatientList() {
  const { patients } = usePatientStore()
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
        <div className="mx-5 bg-white border shadow rounded-lg pt-10">
          {
            patients.length ? (
              <>
                <h2 className="font-black text-3xl text-center">Patient List</h2>
                <p className="text-xl mt-5 mb-10 text-center">Patients and Appointments</p>
                {
                  patients.map((patient => (
                    <PatientDetails
                      key={patient.id}
                      patient={patient} />
                  )))
                }
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-64">
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                </svg>
                <p className="mt-4 text-lg font-medium text-gray-600">No patients found</p>
                <p className="mt-1 text-sm text-gray-500">Start adding patients to see them listed here.</p>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
