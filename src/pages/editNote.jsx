import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import useCreateDate from "../components/useCreateDate";

export default function EditNote({ notes, setNotes }) {
    const {id} = useParams();
    const note = notes.find((item) => item.id == id);
    const [title, setTitle] = useState(note.title)
    const [details, setDetails] = useState(note.details);
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();

        if(title && details) {
            const newNote = {...note, title, details, date}
            const newNotes = notes.map(item => {
                if(item.id == id) {
                    item = newNote;
                }

                return item;
            });

            setNotes(newNotes);
        }

        navigate('/');
    }

    const handleDelete = () => {
        const newNotes = notes.filter(item => item.id != id);

        setNotes(newNotes);
        navigate('/');
    }

    return(
        <section>
            <header className="flex justify-between">
                <Link to="/" id="button" className="bg-primary w-[52px] h-[52px] flex justify-center items-center rounded-[36px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </Link>
                <div className="flex gap-2">
                <button onClick={handleForm} id="button" className="bg-primary w-fit px-5 py-3 rounded-[36px] text-white text-xl">Save</button>
                <div id="button" className="bg-error w-[52px] h-[52px] flex justify-center items-center rounded-[36px] cursor-pointer" onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>

                </div>
            </header>
            <main>
                <form className="flex flex-col" onSubmit={handleForm}>
                    <input type="text" placeholder="Title" autoFocus className="outline-none bg-transparent text-lg my-5 py-2 border-b-2 border-primary" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea cols="30" rows="15" placeholder="Write here..." className="outline-none text-lg bg-transparent" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                </form>
            </main>
        </section>
    )
}