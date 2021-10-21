## Note Taking app in NodeJS

This application uses yargs to read the input from the console i.e. the notes data and stores the notes in the notes.json file in same folder.

### Setup Steps
* Clone the directory using git clone
* run **npm install**

### Running the application
* To add a note type **node app.js add --title="Your note title" --body="Your note body"**
* To remove a note type **node app.js remove --title="Note title you want to remove"**
* To list all the notes type **node app.js list**
* To read a note type **node app.js read --title="Note title you want to read"**
