import { Navigate, replace, Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import TaskDetails from './pages/TaskDetails'
import Tasks from './pages/Tasks'
import Trash from './pages/Trash'
import Users from './pages/Users'
import Layout from './components/Layout'

function App() {
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
        <Routes>
            <Route element={<Layout />}>
              <Route index path='/' element={<Navigate to="/dashboard" />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/completed/:status' element={<Tasks />} />
              <Route path='/in-progress/:status' element={<Tasks />} />
              <Route path='/todo/:status' element={<Tasks />} />
              <Route path='/team' element={<Users />} />
              <Route path='/trashed' element={<Trash />} />
              <Route path='/task/:id' element={<TaskDetails />} />
            </Route>


              <Route path='/login' element={<Login />} />
        </Routes>

        <Toaster richColors/>
    </main>
  )
}

export default App
