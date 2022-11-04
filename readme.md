**Instructions:**

• Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:

• Use at least one array.

• Use at least two classes.

Your menu should have the options to create, view, and delete elements.

**Based app on sample app with these changes:**

Changed all class, variable, method and function names to better describe them

Added format field to Record class

Added list of collections with indexes to viewCollection prompt

Changed collection menu so it returns to the same menu instead of the main menu after an action (this is
probably contributing to problem on line 139 below)

Added condition !=null to deleteRecord and deleteCollection functions to fix error where canceling without entering an index wa returning a null value and deleting index 0.

Added "play record" option that alerts "now playing (artist and title of record)".

Plan to add "now playing" text to collection page with currently playing record, and add "stop playing" menu item.

**Current Issues:**

RESOLVED The console is throwing an error saying "description" is undefined throughout but that variable is working the way I expect it to where i used it, I think!

Line 26: RESOLVED The class RecordCollection contains methods addRelease and describe (this is something I took from the video) but I'm not sure if they're being used anywhere. Is there an easy way to check this? I could probably use more clarity on when I might want to make/use methods. I also added a "play" method to records but then didn't use it so I removed it.

Line 76: "Cancel" button on main menu doesn't do anything (entering 0 successfully exits and alerts). Cancel works on other menus/prompts except when deleting a record (see line 160). This is the same as the app from the video.

Line 120: first line in collectString output is indented, I don't want it to be

Line 139: In collection menu, after adding a record it does not display the record. If you exit to the main menu and return you can see the records you added. I need to figure out how to refresh that section after adding a record.

Line 160: RESOLVED If you choose "delete collection" and hit cancel without entering anything, it still deletes the first element in the collections array and the last element returns as null (at least it did once??). This also happens with "delete record" minus the null part. This also happens in the app from the video.
