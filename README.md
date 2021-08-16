# Edelweiss Utils

## Filter Cats
Filters out old catalogs from the list in the `Orders > Edit > Advanced` pop-up page

The defaults for the filters are just set to filter out anything that's got a date from 2000-2017, assuming that those are not needed anymore.
Also has editable filters so you can set your own in the add-on's settings

Default filters are : 
```
// Anything with a date between 2000 and 2017
201[0-7]
200[0-9]

// Any catalog from Spring/ Summer/ Fall/ Winter 00 to 17
(Spring|Summer|Fall|Winter)(0[0-9]|1[0-7])
(Sp|S|F|FL|W)(0[0-9]|1[0-7])
```

## Search Cats
Filter the above lists to show only ones matching a given string with `Search Cats`

## Change Tags
Changes the tags/ notes/ reviews so the number and title are copyable. 
This works under any catalogs that have any of those.

## Get ISBNs
Grabs the ISBNs from the list of books based on the `pve_sku` html class

## Get Title Info
Puts all the info from a list of books into an alert where it can be copied easily

* The list needs to be in the condensed mode