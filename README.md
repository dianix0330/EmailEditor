# This is Email Template Editor React Application

## The structure of the email template editor is as follows;
- Template Frame
- Components
  * Images
  * Title
  * Paragraph

### TEMPALTE FRAME
A frame is the container that houses the entire email template. The template frame is used to specify all the configuration options of the email template. Configuration options include the following;

- Subject - The subject of the email
- Banner image URL - The url of image banner
- Show banner - Whether or not the banner should be visible
- Show social campaign - Whether or not the social compaign section should be visible

## COMPONENTS

There are various type of components, and each component has its configuration options.
A tempalte is meant to hold multiple components which are arranged sequentially within the template

- A. Image 
  An image component is used to add an image to a template. The configuration options of the image component include:
  Image URL - The url of the image to display

- B. TITLE
  A title component is used to add a header to a template. The configuration options of the title component include:
  Text - The text content of the header
  Size - The size of the header (Selectable from to H1, H2, H3)
  Alignment - Alignment of the header (Selectable from “Center”, “Left”, “Right”)
  
- C. PARAGRAPH
  A paragraph component is used to add a paragraph to a template. The configuration options of the paragraph component include:
  Text - The text content of the paragraph
  Alignment - Alignment of the header (Selectable from “Center”, “Left”, “Right”)

## HOW TO BUILD THE TEMPLATE COMPOSER
In the template composer
- A user should be able to add new components to the template in a sequential order.
- A user should also be able to reorder the elements in the template composer.
- A user should be able to select an element that has been added to the template composer, and edit its properties within the inspector.
- A user should be able to save the template; Save the template by sending the json output of the template to the url provided in the   API documentation provided.

## Live Demo [https://apexnetwork-email-editor.netlify.app/]
