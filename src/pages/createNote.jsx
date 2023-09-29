import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"

import useCreateDate from "../components/useCreateDate";

export default function CreateNote({ setNotes }) {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title && details) {
            const note = {id: uuid(), title, details, date}
            // add this note to the Notes array
            setNotes(prevNotes => [note, ...prevNotes]);
            navigate('/')
        }
    }

    return(
        <section>
            <header className="flex justify-between">
                <Link to="/" id="button" className="bg-primary w-[52px] h-[52px] flex justify-center items-center rounded-[36px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </Link>
                <button id="button" className="bg-primary w-fit px-5 py-3 rounded-[36px] text-white text-xl" onClick={handleSubmit}>Save</button>
            </header>
            <main>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" autoFocus className="outline-none bg-transparent text-lg my-5 py-2 border-b-2 border-primary" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea cols="30" rows="15" placeholder="Write here..." className="outline-none text-lg bg-transparent" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                </form>
            </main>
        </section>
    )    
}