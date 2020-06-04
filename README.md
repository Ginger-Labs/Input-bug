# Input-bug
Sample project to demonstrate RN-62 input bugs.

SIM - iPhone 11 (13.4.1):
1) Click on the "Click Me" Button, set the cursor in the middle, add some text, click on the button again: Notice the text is set to needed one but the selection is not 10
2) Input text: "Hello world", move cursor in between words, click on "@":
  Expected: "Hello @Mihailworld" with the cursor at 13
  Actual: "Hello @Mihailworld" with the cursor at the end of the whole string.

SIM - nexus 6P API28
1) Add text, click on enter (new line).
  Expected: The text stays and a new line is created with "-" in front.
  Actual: The first line becomes empty and the second line "-".
2) Press enter twice and you will get a:
   "Exception in native call java.lang.IndexOutOfBoundsException: setSpan (6 ... 6) ends beyond length 3"
3) Press "@" twice and observe the same bug above.
