/*
•	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
Your menu should have the options to create, view, and delete elements.
*/

class Record {
  constructor(artist, title, format) {
    this.artist = artist;
    this.title = title;
    this.format = format
  }
  describe() {
    return `${this. artist} - ${this.title} (${this.format})`;
  }

}

class RecordCollection {
  constructor(owner) {
    this.owner = owner;
    this.records = [];
  }

  addRelease(record) {
    if (record instanceof Record) {
      this.records.push();
    } else {
      throw new Error(
        `You can only add a record. Argument is not a record: ${release}`
      );
    }
  }

  describe() {
    return `${this.owner} has ${this.records.length} records in their collection.`;
  }
}

class Menu {
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
    return prompt(`
        0) exit
        1) create new record collection
        2) view record collection
        3) delete record collection
        4) display all record collections
        `);
  }

  showTeamMenuOptions(collectionInfo) {
    return prompt(`
        0) back
        1) create record
        2) delete record
        3) play record
        -------------------
        ${collectionInfo}
        `);
  }

  displayCollections() {
    let collectString = "";
    for (let i = 0; i < this.collections.length; i++) {
      collectString += i + ") " + this.collection[i].owner + "\n";
   
    }
    alert(collectString);
  }

  createCollection() {
    let owner = prompt("Enter the owner of this record collection:");
    this.collections.push(new Collection(owner));
  }

  viewCollection() {
    let index = prompt("Enter the index of the collection you wish to view:");
    if (index > -1 && index < this.collections.length) {
      this.selectedCollection = this.collections[index];
        let description = "Collection Owner: " + this.selectedCollection.name + "\n";
      for (let i = 0; i < this.selectedCollection.records.length; i++) {
        description +=
          i +
          ")" +
          this.selectedCollection.records[i].artist +
          " - " +
          this.selectedCollection.records[i].title + 
          `(${this.selectedCollection.format})`
          "\n";
      }
          let selection = this.showCollectionMenuOptions(description);
          switch (selection) {
            //this is a sub menu so this selection variable is different
            case "1":
              this.createRecord();
              break;
            case "2":
              this.deleteRecord();
              break;
              //added this option to play a record:
            case "3":
              this.playrecord();
          }
    }

  }

  deleteCollection() {
    let index = prompt("Enter the index of the collection you wish to delete");
    if (index > -1 && index < this.collections.length) {
      this.collections.splice(index, 1);
    }
  }

  createRecord() {
    let artist = prompt("Enter artist for the new record:");
    let title = prompt("Enter title of new record:");

    //added new attribute: format
    let format = prompt("Enter format of new record")
    this.selectedCollection.records.push(new Record(artist, title, format));

      }

  deleteRecord() {
    let index = prompt("Enter the index of the record you wish to delete");
    if (index > -1 && index < this.selectedCollection.records.length) {
      this.selectedRecord.records.splice(index, 1);
    }
  }

  playRecord(){
    let index = prompt("Enter the index of the record you wish to play");
    if(index > -1 && index <this.selectedCollection.records.length){  
      this.selectedRecord = this.records[index];
        let description = `Now playing: ${this.selectedRecord.title} by ${this.selectedRecord.artist}` 

    }
  }
}



let menu = new Menu();
menu.start();
