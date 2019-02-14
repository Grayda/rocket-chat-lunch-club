# rocket-chat-lunch-club
A silly little integration for Rocket.Chat that picks a random restaurant when you send a food emoji

## But why?
Every Friday (or whenever Nick hasn't bothered to bring his lunch, which is probably every day) we get takeaway. We usually spend half the morning trying to decide on a place in between being sidetracked by our work. Eventually we pick somewhere, sometimes using "Wheel Decide", then argue over who is going to collect and / or pay for it.

This integration attempts to help us decide on a place, so we're free to spend our time doing more useful things, like arguing over who is going to collect

## How do I install it?
1. Edit the file as necessary, adding your locations to the `lunch` variable
2. Go to your administration page (Options > Administration)
3. Make a new outgoing webhook
   * The event trigger should be set to "Message Sent"
   * The channel should be the channel you want to run this integration in (e.g. \#lunch)
   * Set the URL to anything (it doesn't matter what, so http://example.com is fine)
   * Ensure "enabled" is set to true where necessary
   * Paste the script in and save the webhook

## How do I use it?
When you can't decide what to have for lunch, simply send a food emoji and it'll return a restaurant, along with their menu so you can just click on it and go.

You could use the attachments field to include a PDF menu, or whatever you want to do with it.

## Licensing
This is public domain. Do whatever you want with it. It'd be neat if you shared your chances back, but you don't have to.  
