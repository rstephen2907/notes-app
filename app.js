const chalk = require('chalk');
const yargs = require('yargs');
const { listNotes, addNote, removeNote, readNote } = require('./notes');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title);
    }
});


// Create list command
yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler() {
        listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reads a Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNote(argv.title);
    }
});

yargs.parse();