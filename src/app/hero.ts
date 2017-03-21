export class Hero {
  id: number;
  name: string;
  applications: Application[];
}

export class Application{
  id: number;
  category: string;
  nomination: string;
}

export const categories: string[] = [
  "Меньше 1-го года",
  "От 1-го года до 3-ех лет",
  "Более 3-х лет",
  "Более 6-ти лет"
];

export const cats: Object = {
  0: "Меньше 1-го года",
  1: "От 1-го года до 3-ех лет",
  2: "Более 3-х лет",
  3: "Более 6-ти лет"
};

export const nominations: string[] = [
  "Классическое наращивание ресниц",
  "Объемное наращивание ресниц \"Двойной объем\" (2D)",
  "Объемное наращивание ресниц \"Тройной объем\" (3D)"  
];