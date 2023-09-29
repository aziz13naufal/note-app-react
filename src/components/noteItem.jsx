import { Link } from "react-router-dom"

const NoteItem = ({ note }) => {
    return (
        <Link to={`/edit/${note.id}`} id="note-item" className="bg-primary p-4 rounded-[5px] text-white flex flex-col justify-between flex-1">
            <h4 className="text-lg font-semibold">{note.title.length > 40 ? (note.title.substr(0, 40)) + "..." : note.title}</h4>
            <p>{note.date}</p>
        </Link>
    )
}

export default NoteItem;    