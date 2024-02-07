import { Prisma } from '@prisma/client';

export const authors: Prisma.authorUpsertArgs['create'][] = [
  {
    id: 1,
    email: 'rowling@gmail.com',
    phoneNumber: '1234567890',
    surname: 'Rowling',
    name: 'J.K.',
    books: {
      create: [
        {
          name: "Harry Potter and the Philosopher's Stone",
          content:
            "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed... ",
        },
        {
          name: 'Harry Potter and the Chamber of Secrets',
          content:
            "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike. And strike it does. For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockhart, a spirit named Moaning Myrtle",
        },
        {
          name: 'Harry Potter and the Prisoner of Azkaban',
          content:
            "For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort. Now he has escaped, leaving only two clues as to where he might be headed: Harry Potter's defeat of You-Know-Who was Black's downfall as well. And the Azkaban guards heard Black muttering in his sleep, \"He's at Hogwarts... he's at Hogwarts.\" ",
        },
        {
          name: 'Harry Potter and the Goblet of Fire',
          content:
            "Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream). He wants to find out about the mysterious event that's supposed to take place at Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn't happened for a hundred years. He wants to be a normal, fourteen-year-old wizard. But unfortunately for Harry Potter, he's not normal - even by wizarding standards. And in his case, different can be deadly. ",
        },
        {
          name: 'Harry Potter and the Order of the Phoenix',
          content:
            'There is a door at the end of a silent corridor. And it’s haunting Harry Potter’s dreams. Why else would he be waking in the middle of the night, screaming in terror? Here are just a few things on Harry’s mind: A Defense Against the Dark Arts teacher with a personality like poisoned honey. A venomous, disgruntled house-elf. Ron as Keeper of the Gryffindor Quidditch team. The looming terror of the end-of-term Ordinary Wizarding Level exams. And of course, the growing threat of He-Who-Must-Not-Be-Named. In the richest installment yet of J.K. Rowling’s seven-part story, Harry Potter is faced with the unreliability of the very government of the magical world and the impotence of the authorities at Hogwarts. Despite this (or perhaps because of it), he finds depth and strength in his friends, beyond what even he knew, boundless loyalty; and unbearable sacrifice. ',
        },
      ],
    },
  },
  {
    name: 'J.R.R.',
    surname: 'Tolkien',
    email: 'tolkien@gmail.com',
    phoneNumber: '0987654321',
    id: 2,
    books: {
      create: [
        {
          name: 'The Hobbit',
          content:
            'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. ',
        },
        {
          name: 'The Lord of the Rings',
          content:
            'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins. ',
        },
      ],
    },
  },
];
