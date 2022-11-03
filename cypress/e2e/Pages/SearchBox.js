export class SearchBox {

    serchbytext_txtbox = ('#searchText')
    searchbyowner_txtbox = ('[for="searchOwner"] > input')
    profile_note_txtbox = ('#searchText')
    profile_note_submitbtn = ('[type="submit"]')
   
    createNote(notevalue){
        cy.get(this.profile_note_txtbox).type(notevalue).get(this.profile_note_submitbtn).click()   
    }
    enterValue(searchvalue) {
        cy.get(this.serchbytext_txtbox).type(searchvalue)
    }
    enterOwnerValue(ownersearchvalue) {
        cy.get(this.searchbyowner_txtbox).type(ownersearchvalue)
    }
}