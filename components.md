# DATA

## DATA LAYER

### GALERY OF IMAGES (public API)

- image
- name
- prompts
- description
- category
- add to collection?

### MY COLLECTION OF IMAGES (private API)

- image
- name
- prompts
- description
- category
- remove
- modify

### isLoading (boolean)

### ERROR 404

## DATA MODIFICATIONS

- Create new image to My Collection
- Modify image from My Collection
- Delete image from My collection
- set isLoading
- unset isLoading

# COMPONENTS

## HEADER

- Shows logo
- Show the navigation pages
- Receives the action from the user to go to a page

## IMAGES (Card)

- Receives an image
- Receives delete image action
- Receives add image action
- Receives modify image action
- Shows an image
- Shows the name, prompt and category of the image
- Shows a button to add to collection
- Shows a button to delete from collection
- Sends add action to button component
- Sends delete action to button component
- Sends modify action to button component

## IMAGES Gallery

- Receives a list of images
- Show a list of images
- Receives the action from the user to go to detail

## SEARCH BAR

- Receives a function to send a request to public API
- Receives the action to search an image

## BUTTON

- Receives an icon
- Receives an action
- Shows the icon inside the button
- on click submits the received action

## FAV BUTTON

## FORM

- Receives the add image action
- shows inputs to receive data to create image
- Shows a button to submit data
- On submit, executes the recived add image action
- On submit, executes the recived modify image action

## LOGIN

- Receives the

## SIGNUP

## HOME PAGE

## MY COLLECTION

## DETAIL PAGE

## LOADING PAGE

## ERROR PAGE

## 404 PAGE
