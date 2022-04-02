const { argv } = require("yargs")
const yargs = require("yargs")
const notes = require("./notes.js")
const  {loadNotes} = require ('./notes.js') 

yargs.version("1.1.0")

//crear comando add
yargs.command(
    {
        command:'add',
        describe:'Add new note',
        builder:{
            title:{
                describe:"Note title",
                demandOption:true,
                type:'string'
            },
            body:{
                describe: "Note body",
                demandOption:true,
                type:'string'
            }
        },
        handler(argv){
            notes.addNote(argv.title, argv.body)
        }
    }
)

//crear comando get
yargs.command(
    {
        command:'read',
        describe:'Read notes',
        handler(){
            notes.listNotes()
        }
    }
)

//crear comando remove
yargs.command(
    {
        command:'remove',
        describe:'remove a note',
        builder:{
            title:{
                describe:'Note Title',
                demandOption:true,
                type:'string'
            }
        },
        handler(argv){
            notes.removeNote(argv.title)
        }
    }
)

//crear comando leer 1
yargs.command({
    command:'readOne',
    describe:'read one note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readOneNote(argv.title)
    }
})

//crear comando modify 
yargs.command({
    command:'modify',
    describe:'modify a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.modifyNote(argv.title,argv.body)
    }
})

yargs.parse()