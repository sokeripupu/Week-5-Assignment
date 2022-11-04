/*
•	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
Your menu should have the options to create, view, and delete elements.
*/

class RecordClass {
  constructor(artist, title, format) {
    this.artist = artist;
    this.title = title;
    this.format = format;
  }
}

class RecordCollection {
  constructor(owner) {
    this.owner = owner;
    this.records = [];
  }

  // Removed methods from examples since they are not used
}

class Menu {
  element;
  constructor() {
    this.collections = [];
    this.selectedCollection = null;
  }

  start() {
    let selection = this.showMainMenuOptions();

    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createCollection();
          break;
        case "2":
          this.viewCollection();
          break;
        case "3":
          this.deleteCollection();
          break;
        case "4":
          this.displayCollections();

        default:
          selection = 0;
      }

      selection = this.showMainMenuOptions();
    }

    alert("Goodbye!");
  }

  showMainMenuOptions() {
    //"cancel" button doesn't do anything in this menu. Exiting with 0 works.
    return prompt(`
        0) exit
        1) create new record collection
        2) view record collection
        3) delete record collection
        4) display all record collections
        `);
  }

  showCollectionMenuOptions(collectionInfo) {
    return prompt(`
        0) back
        1) add record
        2) delete record
        3) play record
        -------------------
        ${collectionInfo}
        `);
  }

  displayCollections() {
    let collectString = "";
    for (let i = 0; i < this.collections.length; i++) {
      collectString += i + ") " + this.collections[i].owner + "\n";
    }
    alert(collectString);
  }

  createCollection() {
    let owner = prompt("Enter the owner of this record collection:");
    this.collections.push(new RecordCollection(owner));
  }

  //added list of collections with indexes to view collection prompt, so I don't have to remember which index is which.
  viewCollection() {
    let collectString = "";
    for (let i = 0; i < this.collections.length; i++) {
      collectString += i + ") " + this.collections[i].owner + "\n";
    }

    let index = prompt(`Enter the index of the collection you wish to view: 
    ${collectString}`);

    if (index > -1 && index < this.collections.length) {
      this.selectedCollection = this.collections[index];
      let description =
        "Collection Owner: " + this.selectedCollection.owner + "\n";
      for (let i = 0; i < this.selectedCollection.records.length; i++) {
        description +=
          i +
          ") " +
          this.selectedCollection.records[i].artist +
          " - " +
          this.selectedCollection.records[i].title +
          " " +
          this.selectedCollection.records[i].format +
          "\n";
      }
      let selection = this.showCollectionMenuOptions(description);

      // after creating a record, the collection page doesn't display the record. You can see it if you exit to main menu and return
      //Working on a "refresh" method to update this automatically.

      while (selection != 0) {
        switch (selection) {
          case "1":
            this.createRecord();
            break;
          case "2":
            this.deleteRecord();
            break;
          //added this option to play a record:
          case "3":
            this.playRecord();
        }
        //changed this so it would return to the collection menu instead of the main menu after an action is taken.
        selection = this.showCollectionMenuOptions(description);
      }
    }
  }

  deleteCollection() {
   
   //added condition of != null because it was deleting collection 0 when no index was entered. When hitting "cancel", value returns as null. Same issue occurred with deleteRecord.
    let index = prompt("Enter the index of the collection you wish to delete");
    if (index > -1 && index < this.collections.length && index != null) {
      this.collections.splice(index, 1);
    }
  }

  createRecord() {
    let artist = prompt("Enter artist for the new record:");
    let title = prompt("Enter title of new record:");

    //added new attribute: format
    let format = prompt("Enter format of new record:");
    this.selectedCollection.records.push(
      new RecordClass(artist, title, format)
    );
  }

  deleteRecord() {
    let index = prompt("Enter the index of the record you wish to delete:");

    if (
      index > -1 &&
      index < this.selectedCollection.records.length &&
      index != null
    ) {
      this.selectedCollection.records.splice(index, 1);
    }
  }

  playRecord() {
    let index = prompt("Enter the index of the record you wish to play");
    if (index > -1 && index < this.selectedCollection.records.length) {
      this.selectedRecord = this.selectedCollection.records[index];
    }
    let description = `Now playing: ${this.selectedRecord.title} by ${this.selectedRecord.artist}`;
    alert(description);

    //working on displaying a "now playing" description on the collection page and add "stop playing" menu option.
  }
}

let menu = new Menu();
menu.start();
