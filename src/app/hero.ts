export class Hero {
  id: number;
  name: string;
  applications: Application[];
}

export class Application{
  id: number;
  category: Category;
  nomination: Nomination;
}

export class Category{
  id: number;
  name: string;
}

export class Nomination{
  id: number;
  name: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Меньше 1-го года",    
  },
  {
    id: 2,
    name: "От 1-го года до 3-ех лет"
  },
  {
    id: 3,
    name: "Более 3-х лет"
  },
  {
    id: 4,
    name: "Более 6-ти лет"
  }
];

export const cats: Object = {
  0: "Меньше 1-го года",
  1: "От 1-го года до 3-ех лет",
  2: "Более 3-х лет",
  3: "Более 6-ти лет"
};

export const nominations: Nomination[] = [
  {
    id: 1,
    name: "Классическое наращивание ресниц"
  },
  {
    id: 2,
    name: "Объемное наращивание ресниц \"Двойной объем\" (2D)"
  },
  {
    id: 3,
    name: "Объемное наращивание ресниц \"Тройной объем\" (3D)"
  }  
];