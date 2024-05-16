import NoteContext from '../Context/NoteContext'
import Form from '../Components/Form'
const NoteState=()=>{
    const s1={
        "college":"NITRaipur",
        "year":"third"
    }
    return(
        <NoteContext.Provider value={s1}>
            <Form/>
        </NoteContext.Provider>
    )
}