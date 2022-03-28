const fs = require('fs')
const { title } = require('process')

const addNote = function(title, body){
    console.log("El título de la nota ", title)
    console.log("El cuerpo de la nota ", body)
    const notes = loadNotes()
    const duplicateNote = notes.find((notes)=> notes.title === title)
    if(!duplicateNote){
        notes.push(
            {
                title: title,
                body:body
            }
        )
        //guardar en el archivo
        saveNotes(notes)
        console.log("Nota creada!")
    }
    else{
        console.log("Nota duplicada, intenta de nuevo")
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}

const listNotes = function(){
    const notes = loadNotes()
    notes.forEach((notes)=>{
        console.log("El título de la nota ",notes.title)
        console.log("El cuerpo de la nota ",notes.body)
    })
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return[]
    }
}

const removeNote = function(title){
    const notes=loadNotes()
    const notesToKeep = notes.filter((notes) => notes.title != title)
    if(notes.length>notesToKeep.length){
        console.log("Nota eliminada")
        saveNotes(notesToKeep)
    }
    else{
        console.log("Nota no encontrada")
    }
}

const readOneNote = function(title){
    const notes = loadNotes()
    const noteFound = notes.find((notes)=>notes.title===title)
    if(notes){
        console.log('Nota encontrada')
        console.log("Título: "+noteFound.title+" -","Nota: "+noteFound.body)
    }
    else{
        console.log('nota no encontrada')
    }
}

module.exports = {
    addNote:addNote, 
    loadNotes:loadNotes,
    listNotes:listNotes,
    removeNote:removeNote,
    readOneNote:readOneNote
}