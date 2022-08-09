/*
create a foldersParent hashmap
/A
|__ _ /B
  |___ /C <-- access
  |___ /D
|___ /E <-- access
  |___ /F
|___ /G

foldersParent = {
  B: A,
  C: B,
  D: B,
  E: A,
  F: E
}

create an acces hashmap
access = {
  C: true,
  E: true,
}
*/

class FolderAccess {
  constructor(foldersParent, access) {
    this.foldersParent = foldersParent;
    this.access = access;
  }

  hasAccess(folderName) {
    let currFolder = folderName;

    while (currFolder !== undefined) {
      // if you can access current folder, return true
      if (currFolder in this.access) {
        return true;
      } else {
        // otherwise check this folders parent, to see if you can acess it
        currFolder = this.foldersParent[currFolder];
      }
    }

    return false;
  }

}
// simplifyAccess() {
//   let simplifiedAccess = {};

//   for (const folder of this.access) {
//     let currFolder = this.foldersParent[folder];
//     let shouldDelete = false;
//     while (currFolder !== null && !shouldDelete) {
//       if (this.access[currFolder]) {
//         shouldDelete = true;
//       } else {
//         currFolder = this.foldersParent[currFolder];
//       }
//     }
//     if (!shouldDelete) {
//       simplifiedAccess[folder] = true;
//     }
//   }
//   return simplifiedAccess;
// }