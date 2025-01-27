# NoDub
This firefox extensions simply removes all dubs (non japanese voiced anime) from the crunchyroll simulcast calander view.
As crunchyroll includes all dubs of all languages inside the simulcast calander, it's hard to get an overview.

## How it works 
The anime titles in the calander view are constructed like
 `<title> (<language> dub)`
 This extension searches for `dub)` in the correct HTML tag and deletes the HTML element.
The closing bracket is included to avoid deleting shows that include `dub` in the `<title>`
