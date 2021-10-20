const fs = require('fs');
const chalk = require('chalk');

const errorMsg = msg => console.log(chalk.black.bgRedBright(msg));

const debugMsg = msg => console.log(chalk.black.bgYellowBright(msg));

const successMsg = msg => console.log(chalk.black.bgGreenBright(msg));

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJsON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (duplicateNote) {
        errorMsg("Title already taken!!!");
    } else {
        notes.push({ title, body });
        saveNotes(notes);
        successMsg("Note added successfully...");
    }
}


const removeNote = (title) => {
    const notes = loadNotes();
    const filterdNotes = notes.filter(note => note.title !== title);
    if (filterdNotes.length === notes.length) {
        errorMsg("No note removed!!!");
    } else {
        saveNotes(filterdNotes);
        successMsg("Note removed successfully...");
    }
}

const listNotes = () => {
    const notes = loadNotes();
    successMsg("Your Notes");
    notes.forEach(note => {
        console.log('Title: ' + note.title);
        console.log('Body: ' + note.body);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const requiredNote = notes.find(note => note.title === title);
    if (requiredNote) {
        successMsg("Note found...");
        console.log(chalk.inverse(requiredNote.title));
        console.log(requiredNote.body);
    } else {
        errorMsg("Note not present in the list!!!");
    }
}

module.exports = { listNotes, addNote, removeNote, readNote }