import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './pages/notes'
import CreateNote from './pages/createNote'
import EditNote from './pages/editNote'
import { useEffect, useState } from 'react';

export default function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="bg-primary w-full h-screen flex justify-center items-center">
      <div id="box" className="w-[600px] h-[600px] bg-neutral rounded-[45px] p-1 shadow-lg">
        <div id="box-container" className="relative w-full h-full bg-white rounded-[41px] p-5 text-neutral">
          <BrowserRouter>
            <Routes>
                <Route
                path="/"
                element={<Notes notes={notes} />}
                />
                <Route
                path="/create"
                element={<CreateNote setNotes={setNotes} />}
                />
                <Route
                path="/edit/:id"
                element={<EditNote notes={notes} setNotes={setNotes} />}
                />
            </Routes>
          </BrowserRouter>
        </div>
        </div>
    </div>
  )
}