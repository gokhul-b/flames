export function relationship(name1, name2) {
  name1 = name1.replace(" ", "").toLowerCase();
  name2 = name2.replace(" ", "").toLowerCase();

  let uniqueCount = 0;
  let commonLetters = "";
  for (let i = 0; i < name1.length; i++) {
    for (let j = 0; j < name2.length; j++) {
      if (name1[i] === name2[j] && commonLetters.indexOf(name1[i]) === -1) {
        commonLetters += name1[i];
        uniqueCount += Math.abs(
          name1.split(name1[i]).length - 1 - name2.split(name2[j]).length + 1
        );
      }
    }
  }

  let combName = name1 + name2;
  for (let i = 0; i < combName.length; i++) {
    if (commonLetters.indexOf(combName[i]) === -1) {
      uniqueCount += 1;
    }
  }

  let flames = "FLAMES";
  let temp = 6;
  let pop = 0;

  while (temp - 1 > 0) {
    pop = (uniqueCount % temp) - 1;
    if (pop === -1) {
      flames = flames.slice(0, flames.length - 1);
    } else {
      flames = flames.slice(pop + 1, flames.length) + flames.slice(0, pop);
    }
    temp -= 1;
  }

  let bond = {
    F: {
      label: "Friends",
      text: '"You have someone who has the courage to tell you what shit you are, and still be loving and nice to you"',
    },
    L: { label: "Lovers", text: '"All you need is love and you have it"' },
    A: {
      label: "Affection",
      text: '"Your love for him/her is unconditional and eternal."',
    },
    M: {
      label: "Marriage",
      text: '"Wishing you a lifetime of love and happiness on your upcoming marriage."',
    },
    E: {
      label: "Enemies",
      text: '"Do not underestimate negative relationships. You have a deep bond with those you hate, fear, or envy. Time to dissolve that"',
    },
    S: {
      label: "Sibling",
      text: '"Having a sibling is a blessing, cherish the memories and make more as you grow old together. Enjoy the journey of brotherhood/sisterhood."',
    },
  };

  return bond[flames];
}
