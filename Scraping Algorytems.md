From the root
- go to blockquote
  - Start working down each <p tag>
  -create a node for the fist <p tag>
  - keep all the text within each line to be the text for the node.
    -if number isn't a prime (X'), look for a link, or move to the next line.
      -if the next line is not the prime of the previous line, look for a link add it as a child.
      - if the next line is it's prime then mark it as a sibling. look for a link Go to next line
    - if the number is a prime, and the previous line doesn't share its numeral (not siblings), then find it's sibling and mark accordingly (.parent.children). then go to next line
  - within each p tag look for a 3rd anchor <a>[2].
    if there's a third click through
for groups repeat earlier steps




other approach-
- start with 1 and 1' and for each of them create a node and set it's head value to be the title of the page. If root variable is null, then set head value as root.

- look at the first child of 1, (2) and find it's sibling and add them as children of the first node.

- find 3 find it's parent (which is the line above it), then find 3' and add them as children of the parent.
-repeat process until there are no further numbers
-- create a regex to find any atag within the blockquote box that begins with a '/'

-- find the line number of the link, and set it to root (a reusable variable). and click the link.
-- find 1 and 1' set the head to the title, and add them to children of the link source variable (the variable which we said can be reused).
-- repeat earlier lines.

-- once we get to the species page distinguished by a pageLargeHeading with 2 (or more) words (regex), create plant model.

-- when we get to family page, delineated by a pageLargeHeading with one word, click to the link that says "Key to"

-- follow earlier logic

--- edge cases.  the weird cases with letters and numbers (in Poaceae)

--- if there's a genus and no "key to" we need to capybara and click on the drop down.

--- How to deal with groups within families
  - should work under the same rules of the previous
