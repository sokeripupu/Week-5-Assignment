Instructions:
•	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
Your menu should have the options to create, view, and delete elements.

Based app on sample app with these changes:

Changed all class, variable, method and function names

Added format field to Record class

Added list of collections with indexes to viewCollection prompt

Changed collection menu so it returns to the same menu instead of the main menu after an action (this is 
probably contributing to problem on line 139 below)

Added "play record" option that alerts "now playing (artist and title of record)".

Plan to add "now playing" text to collection page with currently playing record, and add "stop playing" menu item.


Current Issues:

Line 26: The class RecordCollection contains methods addRelease and describe but I'm not sure if they're being used anywhere.
Line 76: "Cancel" button on main menu doesn't do anything (entering 0 successfully exits)
Line 139: In collection menu, after adding a record it does not display the record and choosing "add a record" again returns you to the 
menu without doing anything. If you exit to the main menu and return you can see the records and add another record.


