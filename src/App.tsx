import Header from "./components/Header"
import { ToastContainer } from 'react-toastify'
import Hero from "./components/Hero"
import PatientList from "./components/PatientList"
import PatientForm from "./components/PatientForm"
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto px-6">
        <div className="mt-12 md:flex">
          <PatientForm />
          <PatientList />
        </div>
      </main>
      <ToastContainer />
    </>
  )
}

export default App