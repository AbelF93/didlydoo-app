import { test } from "./test.js";
import { createEvent } from "./createEvent.js";
import { displayEventsInfo } from "./displayEvents.js";
import { createForm } from "./createForm.js";
import {deleteEvent} from "./deleteEvent.js";
//86872387d667
deleteEvent("86872387d667");
createForm();
createEvent();
displayEventsInfo();

// src
// https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/

//TO DO
//  Allow users to add their availability to an existing event
//  Edit an event name/description/author

//  You must validate your inputs before sending the data to your backend, inputs required must be filed and shorter than 256 characters. If it's not the case you don't send the request and display the appropriate error below the input.

//DOING

// Display all the events, including everyone's availability

//DO
//  Allow users to create events
//  Delete an event
