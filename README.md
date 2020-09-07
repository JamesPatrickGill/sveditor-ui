# Sveditor-UI - v0.1.0

#### This project is hosted here: [sveditor-ui.vercel.app](https://sveditor-ui.vercel.app)

Sveditor is built to allow people to easily create and use svgs within their github project README's. This repository
 houses the UI aspect of this project which allows one to visually create SVG and then subsequently provides a means to consume them - namely through the Sveditor (serverless) api.

<p align="center">
  <img width="90%" src="gitAssets/FullScreen.png">
</p>

## Current State of Sveditor

Sveditor, at this time, is not much more than a proof of concept. It allows a user to build SVGs out of circles and rectangles with different colours and shadows but not much more. The goal, however is to improve incrementally, I currently have the following ideas:


<table><tr><td valign="top" width="50%">
 
### Immediate Improvements 
<ul>
 <li>
  Add the ability to rotate components when editing them.
 </li>
 <li>
  Allow users to download their SVG directly from the ui.
 </li>
 <li>
  Add more basic components to customise. 
 </li>
  <li>
  Generally add more basic components to customise. 
 </li>
</ul>
</td>

<td valign="top" width="50%">

### Longer Term Goals
<ul>
 <li>
  Pull the api and the ui (this repo) together into a single monorepo.
 </li>
 <li>
  Add in some premade SVGs that can be used as a starting point.
 </li>
 <li>
  Allow users to download a config object as a means to "save their progress" and then allow them to reupload this config to continue where they took off.
 </li>
  <li>
  General improvements to UX and UI for aesthetic cohesion, ease of use and clarity.
 </li>
</ul>
</td></tr></table>
  
## Features

Though, despite there being much improvement to be done, there is some stuff that actually works in this proof of concept. Sveditor-UI has been used in its limited capacity to build the following cards:

<div style="display: inline-block" >
  <a href="/">
    <img src="https://sveditor-api.vercel.app/api/?options=%7B%22Document%22%3A%7B%22order%22%3A0%2C%22type%22%3A%22Document%22%2C%22title%22%3A%22Document%22%2C%22config%22%3A%7B%22width%22%3A380%2C%22height%22%3A380%7D%7D%2C%22Background%22%3A%7B%22order%22%3A1%2C%22type%22%3A%22Rectangle%22%2C%22title%22%3A%22Background%22%2C%22config%22%3A%7B%22x%22%3A40%2C%22y%22%3A40%2C%22width%22%3A300%2C%22height%22%3A300%2C%22rx%22%3A30%2C%22ry%22%3A30%2C%22fillColour%22%3A%22%23FFFFFF%22%2C%22fillOpacity%22%3A1%2C%22stroke%22%3A%22%23000000%22%2C%22strokeOpacity%22%3A%220%22%2C%22strokeWidth%22%3A%221%22%2C%22shadowColour%22%3A%22%23000000%22%2C%22shadowOpacity%22%3A%220.6%22%2C%22blurDeviation%22%3A%2210%22%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%2C%22First%22%3A%7B%22order%22%3A2%2C%22type%22%3A%22Circle%22%2C%22title%22%3A%22First%22%2C%22config%22%3A%7B%22x%22%3A190%2C%22y%22%3A190%2C%22radius%22%3A120%2C%22fillColour%22%3A%22%23ff0000%22%2C%22fillOpacity%22%3A%220.3%22%2C%22stroke%22%3A%22%23000000%22%2C%22strokeOpacity%22%3A1%2C%22strokeWidth%22%3A2%2C%22shadowColour%22%3A%22%23000000%22%2C%22shadowOpacity%22%3A%220%22%2C%22blurDeviation%22%3A16%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%2C%22Second%22%3A%7B%22order%22%3A3%2C%22type%22%3A%22Circle%22%2C%22title%22%3A%22Second%22%2C%22config%22%3A%7B%22x%22%3A210%2C%22y%22%3A190%2C%22radius%22%3A100%2C%22fillColour%22%3A%22%23ff5b00%22%2C%22fillOpacity%22%3A%220.3%22%2C%22stroke%22%3A%22%23000000%22%2C%22strokeOpacity%22%3A1%2C%22strokeWidth%22%3A2%2C%22shadowColour%22%3A%22%23000000%22%2C%22shadowOpacity%22%3A%220%22%2C%22blurDeviation%22%3A16%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%2C%22Third%22%3A%7B%22order%22%3A4%2C%22type%22%3A%22Circle%22%2C%22title%22%3A%22Third%22%2C%22config%22%3A%7B%22x%22%3A230%2C%22y%22%3A190%2C%22radius%22%3A80%2C%22fillColour%22%3A%22%23ff8a00%22%2C%22fillOpacity%22%3A%220.3%22%2C%22stroke%22%3A%22%23000000%22%2C%22strokeOpacity%22%3A1%2C%22strokeWidth%22%3A2%2C%22shadowColour%22%3A%22%23000000%22%2C%22shadowOpacity%22%3A%220%22%2C%22blurDeviation%22%3A16%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%2C%22Fourth%22%3A%7B%22order%22%3A5%2C%22type%22%3A%22Circle%22%2C%22title%22%3A%22Fourth%22%2C%22config%22%3A%7B%22x%22%3A250%2C%22y%22%3A190%2C%22radius%22%3A60%2C%22fillColour%22%3A%22%23ffb300%22%2C%22fillOpacity%22%3A%220.3%22%2C%22stroke%22%3A%22%23000000%22%2C%22strokeOpacity%22%3A1%2C%22strokeWidth%22%3A2%2C%22shadowColour%22%3A%22%23000000%22%2C%22shadowOpacity%22%3A%220%22%2C%22blurDeviation%22%3A16%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%2C%22Fifth%22%3A%7B%22order%22%3A6%2C%22type%22%3A%22Circle%22%2C%22title%22%3A%22Fifth%22%2C%22config%22%3A%7B%22x%22%3A270%2C%22y%22%3A190%2C%22radius%22%3A40%2C%22fillColour%22%3A%22%23ffda00%22%2C%22fillOpacity%22%3A%220.3%22%2C%22stroke%22%3A%22%23000000%22%2C%22strokeOpacity%22%3A1%2C%22strokeWidth%22%3A2%2C%22shadowColour%22%3A%22%23000000%22%2C%22shadowOpacity%22%3A%220%22%2C%22blurDeviation%22%3A16%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%2C%22Sixth%22%3A%7B%22order%22%3A7%2C%22type%22%3A%22Circle%22%2C%22title%22%3A%22Sixth%22%2C%22config%22%3A%7B%22x%22%3A290%2C%22y%22%3A190%2C%22radius%22%3A20%2C%22fillColour%22%3A%22%23FFFF00%22%2C%22fillOpacity%22%3A%220.3%22%2C%22stroke%22%3A%22%23000000%22%2C%22strokeOpacity%22%3A1%2C%22strokeWidth%22%3A2%2C%22shadowColour%22%3A%22%23000000%22%2C%22shadowOpacity%22%3A%220%22%2C%22blurDeviation%22%3A16%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%7D" />
  </a>
  <a href="/">
    <img src="https://sveditor-api.vercel.app/api/?options=%7B%22Document%22%3A%7B%22order%22%3A0%2C%22type%22%3A%22Document%22%2C%22title%22%3A%22Document%22%2C%22config%22%3A%7B%22width%22%3A380%2C%22height%22%3A380%7D%7D%2C%22border%22%3A%7B%22order%22%3A1%2C%22type%22%3A%22Rectangle%22%2C%22title%22%3A%22border%22%2C%22config%22%3A%7B%22x%22%3A40%2C%22y%22%3A40%2C%22width%22%3A300%2C%22height%22%3A300%2C%22rx%22%3A0%2C%22ry%22%3A0%2C%22fillColour%22%3A%22%23FFFFFF%22%2C%22fillOpacity%22%3A1%2C%22stroke%22%3A%22%23000000%22%2C%22strokeOpacity%22%3A1%2C%22strokeWidth%22%3A2%2C%22shadowColour%22%3A%22%23000000%22%2C%22shadowOpacity%22%3A%220%22%2C%22blurDeviation%22%3A16%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%2C%22r%22%3A%7B%22order%22%3A2%2C%22type%22%3A%22Rectangle%22%2C%22title%22%3A%22r%22%2C%22config%22%3A%7B%22x%22%3A140%2C%22y%22%3A70%2C%22width%22%3A100%2C%22height%22%3A100%2C%22rx%22%3A0%2C%22ry%22%3A0%2C%22fillColour%22%3A%22%23ff0000%22%2C%22fillOpacity%22%3A1%2C%22stroke%22%3A%22%23ff0000%22%2C%22strokeOpacity%22%3A1%2C%22strokeWidth%22%3A2%2C%22shadowColour%22%3A%22%23ff0000%22%2C%22shadowOpacity%22%3A1%2C%22blurDeviation%22%3A%2224%22%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%2C%22g%22%3A%7B%22order%22%3A3%2C%22type%22%3A%22Rectangle%22%2C%22title%22%3A%22g%22%2C%22config%22%3A%7B%22x%22%3A70%2C%22y%22%3A210%2C%22width%22%3A100%2C%22height%22%3A100%2C%22rx%22%3A0%2C%22ry%22%3A0%2C%22fillColour%22%3A%22%2300FF00%22%2C%22fillOpacity%22%3A1%2C%22stroke%22%3A%22%2300FF00%22%2C%22strokeOpacity%22%3A1%2C%22strokeWidth%22%3A2%2C%22shadowColour%22%3A%22%2300FF00%22%2C%22shadowOpacity%22%3A1%2C%22blurDeviation%22%3A%2224%22%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%2C%22b%22%3A%7B%22order%22%3A5%2C%22type%22%3A%22Rectangle%22%2C%22title%22%3A%22b%22%2C%22config%22%3A%7B%22x%22%3A210%2C%22y%22%3A210%2C%22width%22%3A100%2C%22height%22%3A100%2C%22rx%22%3A0%2C%22ry%22%3A0%2C%22fillColour%22%3A%22%230000FF%22%2C%22fillOpacity%22%3A1%2C%22stroke%22%3A%22%230000FF%22%2C%22strokeOpacity%22%3A1%2C%22strokeWidth%22%3A2%2C%22shadowColour%22%3A%22%230000FF%22%2C%22shadowOpacity%22%3A1%2C%22blurDeviation%22%3A%2224%22%2C%22xOffset%22%3A0%2C%22yOffset%22%3A0%7D%7D%7D" />
  </a>
</div>

It currently handles creating two SVG elements `<rect>` and `<circle>` aswell as the base `<svg>` tag to create a fully functioning svg. 

## Contribution

Due to the early stage of this project I am happy for any help getting this off the ground. If you are interested any help implementing new components or ways to edit existing components is greatly appreciated (Note: a change will be needed to the api too if svg generation is altered). 

If you have a change open an RFC to claim the work and make sure I haven't already picked it up. Thanks in advance.
