import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { DraftPatient, Patient } from "../type"
import { v4 as uuidv4 } from 'uuid';

type PatientState = {
    patients: Patient[],
    activeId: Patient['id'],
    addPatient: (data: DraftPatient) => void,
    deletePatient: (id: Patient['id']) => void,
    getPatientById: (id: Patient['id']) => void,
    updatePatient: (data: DraftPatient) => void,
}

const createPatient = (item: DraftPatient): Patient => {
    const patient: Patient = {
        ...item,
        id: uuidv4()
    }

    return patient;
}

export const usePatientStore = create<PatientState>()(
    devtools(
        persist((set) => ({
            patients: [],
            activeId: '',

            addPatient: (data: DraftPatient) => {
                const newPatient = createPatient(data);

                set((state) => ({
                    patients: [...state.patients, newPatient]
                }))
            },

            deletePatient: (id: Patient['id']) => {
                set((state) => ({
                    patients: state.patients.filter(item => item.id !== id)
                }))
            },

            getPatientById: (id: Patient['id']) => {
                set(() => ({
                    activeId: id
                }))
            },
            updatePatient: (data: DraftPatient) => {
                set((state) => ({
                    patients: state.patients.map(patient => {
                        if (patient.id === state.activeId) {
                            return {
                                ...data,
                                id: state.activeId
                            }
                        }
                        return patient
                    }),
                    activeId: ''
                }))
            }
        }), {
            name: 'patient-storage',
            storage: createJSONStorage(() => sessionStorage)
        })
    )
)
