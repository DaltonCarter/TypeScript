/* 
My Notes:

Watch mode: this will enable the IDE to keep track of the changes you make in typescript and recompile WITHOUT you needing to re-run the tsc command.

Console Command: tsc app.ts -w or --watch

only quit this mode when done developing by using ctr + c


to enter into a general wtch made so that you can have multiple ts files being managed you need to tell typescript that the folder is a project.
Console command: tsc --init

you need to only do this once per project.

once this is done you can now run the compiler with just:

Console Command: tsc

and it will compile ALL ts files in the project folder
and by connection you can do this with watch mode as well

Console Command: tsc -w or --watch





In the tsconfig.json:

 "exclude": [
    "node_modules"
  ]

  this is how you can exclude certain files from compilation.
  *.dev.ts as an example will exclude any file with that ending
  ** / *.dev.ts as an example will exclude any file in any folder with that ending (No spaces when used)
  important to note that these same things also work in your git ignore file as well

 "include": [

  ]

This does the exact opposite, using this will allow you to tell typescript to explicitly include the files defined into compilation, and ignore anything not defined.
You can also folders.

using these two in tandem will allow you to filter what goes on.

there is a files version that will only allow you to point at specific files, no folders.


in the compiler options you can specify to typescript what version of javascript to compile into
if left blank it will go down as far as es3 which is very OLD.


using a ! will tell typescript not to worry if an element is present, because we know there will be one.

*/

const userName = 'Stark';

console.log(userName);

const button = document.querySelector('button')!;

button.addEventListener('click', () => {
    console.log('Click, Click, BOOM!');
})