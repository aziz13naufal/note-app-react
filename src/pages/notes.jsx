import { useEffect, useState } from "react";
import NoteItem from "../components/noteItem";
import { Link } from "react-router-dom"

export default function Notes({ notes }) {
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('')
    const [filteredNotes, setFilteredNotes] = useState(notes)

    const handleSearch = () => {
        setFilteredNotes(notes.filter(note => {
            if(note.title.toLowerCase().match(text.toLocaleLowerCase())) {
                return note;
            }
        }))
    }

    useEffect(handleSearch, [text])

    return(
        <section>
            <header className="flex justify-between gap-x-2">
                {!showSearch && 
                    <div className="bg-primary w-fit px-5 py-3 rounded-[36px]">
                        <h1 className="text-white text-xl">Note-App | Dicoding Submission</h1>
                    </div>
                }
                {showSearch && 
                    <input type="text" autoFocus placeholder="keyword..." value={text} onChange={(e) => {setText(e.target.value); handleSearch()}} className="bg-primary px-5 py-3 text-xl text-white placeholder:text-white w-full rounded-[36px] outline-neutral" />
                }
                <div className="flex gap-x-2">
                    <button id="button" className="w-[52px] h-[52px] flex justify-center items-center bg-primary rounded-[36px]" onClick={() => setShowSearch(prevState => !prevState)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
            </header>
            <main className="notes h-[470px] mt-5 overflow-y-auto">
                <div className="flex flex-wrap gap-4">
                {
                    filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
                }
                </div>
                <Link to="/create" id="button" className="bg-primary absolute right-0 bottom-0 m-5 w-[52px] h-[52px] flex justify-center items-center rounded-[36px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </Link>
            </main>
        </section>
    )
}