# JavaScript Password Generator

## Technology Used

| Technology Used |                    Resource URL                     |
| --------------- | :-------------------------------------------------: |
| HTML            |         https://en.wikipedia.org/wiki/HTML          |
| CSS             |     https://www.w3schools.com/css/css_intro.asp     |
| Git             | https://www.atlassian.com/git/tutorials/what-is-git |

## Description

[Visit the Deployed Site](https://apixa25.github.io/password-generator/)

I built this project because I wanted to showcase my ability to use JavaScript to build a useful tool. The tool that was picked is a password generator. Most of us are lazy about our passwords so don’t take the time to make ones that are hard to break. We all end up using terms and info that is common, or common to our life. These types of passwords can be fairly easily “brute forced” or even guessed at.

By using a password generator that uses randomly chosen characters it becomes factors more difficult for a human or a computer to break the password.

Using JavaScript alone for the engine of the password generator I implemented several parameters to the potential password.

The user must select a password that is a minimum of 8 characters and a maximum of 128.

The user must select a password that has at least 1 of the following character sets: All-Caps, All-lowercase, Numbers, and Special Characters. If none of these character sets are selected the password generator is going to ask you to try again selecting at least one of these 4 character sets.

The JavaScript that is involved requires a strong understanding of variables, functions, if statments, arrays, query-selectors, event-listeners, and math functions.

The reason I am showing you this project is so that you can see that I know how to work with JavaScript in this way.

## Coolest Piece of Code From This Project:

```js
function generatePassword() {
  var password = "";
  for (var i = 0; i < howManyChar; i++) {
    var randomChar = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomChar];
  }
  return password;
}
```

What your looking at here is the actual password generator function. When the function “generatePassword” is called it plugs in the “choiceArray” (this is the list of characters the user has decided to use), and multiplies it against the random number generator “Math.floor(Math.random()\* choiceArray.length)” each time producing one random character from the list of user selected characters in the “choiceArray”. The number of times it is ran is set by the user and is defined in the “homeManyChar” variable. The function then returns the “Password”.

## Author Info

```md
### Steven Sills II

If you would like to know more about me: (I'm pretty cool! 😁)
If you made it all the way here, thanks for reading!

- [Portfolio](https://apixa25.github.io/steven-sills-portfolio/)
- [LinkedIn](https://www.linkedin.com/in/steven-sills-ii-90781b53/)
- [Github](https://github.com/Apixa25)
```
