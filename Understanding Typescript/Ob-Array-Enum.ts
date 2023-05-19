//  const person
//: {
//     name: string;
//     age: number;
// }
//  = {
//     const person: {
//         name: string;
//         age: number;
//         hobbies: string[];
//         role: [number, string];
//     } = {
//     name: 'Stark',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']

// };

enum Role {Admin, Read_Only, Author}

const person = {
name: 'Stark',
age: 30,
hobbies: ['Sports', 'Cooking'],
role: Role.Admin

};



let favoriteActivities: string[];
favoriteActivities = ['Gaming'];

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}




/* 
My Notes:
This is an example of a nested object:
    const product = {
      id: 'abc1',
      price: 12.99,
      tags: ['great-offer', 'hot-and-new'],
      details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
      }
    }


    This is the Typescript Key/ Type:
    {
      id: string;
      price: number;
      tags: string[];
      details: {
        title: string;
        description: string;
      }
    }

*/