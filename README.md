# JavaScript Password Generator 

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | https://en.wikipedia.org/wiki/HTML | 
| CSS     | https://www.w3schools.com/css/css_intro.asp    |   
| Git | https://www.atlassian.com/git/tutorials/what-is-git     |    

## Description 

[Visit the Deployed Site](https://youtu.be/BFyeuLhjcPY)

I built this project because I wanted to showcase my ability to use JavaScript to build a useful tool.  The tool that was picked is a password generator.  Most of us are lazy about our passwords so don’t take the time to make ones that are hard to break.  We all end up using terms and info that is common, or common to our life. These types of passwords can be fairly easily “brute forced” or even guessed at.

By using a password generator that uses randomly chosen characters it becomes factors more difficult for a human or a computer to break the password.

Using JavaScript alone for the engine of the password generator I implemented several parameters to the potential password.  

The user must select a password that is a minimum of 8 characters and a maximum of 128.
The user must select a password that has at least 1 of the following character sets: All-Caps, All-lowercase, Numbers, and Special Characters.  If none of these character sets are selected the password generator is going to ask you to try again selecting at least one of these 4 character sets.

The JavaScript that is involved requires an strong understanding of variables, functions, if statments, arrays, query-selectors, event-listeners, and math functions.

The reason I am showing you this project is so that you have proof that I know how to work with JavaScript in this way.

## Coolest Piece of Code From This Project:

```js

function generatePassword() {
    var password = "";
    for(var i = 0; i < howManyChar; i++) {
        var randomChar = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomChar];
    }
    return password;
}

```

What you



## Learning Points 


This is a good place to Explain what you Learned by creating this application.
This is a great way to remind about all of the Complex Skills you now have.
If the user is less experienced than you:
They will be impressed by what you can do!

If the user is more experienced than you:
They will be impressed by what you can do!

Remember, it is easy to forget exactly how Valuable and Impressive your skills are, as well as How Much You’ve Learned!
So quantify that here!


## Author Info

```md
### Farley Wittles 


* [Portfolio](https://youtu.be/bHX54GCrDB4)
* [LinkedIn](https://youtu.be/bHX54GCrDB4)
* [Github](https://youtu.be/bHX54GCrDB4)
```

The user has looked through your whole README, and gotten familiar with your application. 
This is where you take credit, and make it easy for them to learn more about you!
Direct them to the following:
- Your GitHub Profile
- Your LinkedIn
- Your Portfolio Website
- And Anything Else You Want!

Give credit where credit is due! 

If you Pseudocode or Pair Program with someone else, give them kudos in your Contributors section!


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.


## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, consider adding a heading called "Features" and listing them there.

## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.