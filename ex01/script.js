// Assumed grade scale: A >= 90, B >= 80, C >= 70, D >= 60, otherwise F.
// A score must be a finite number between 0 and 100 inclusive.
function calculateGrade(score) {
  if (typeof score !== "number" || !Number.isFinite(score) || score < 0 || score > 100) {
    return "Invalid score";
  }

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Assumed access rule: age must be a nonnegative integer, at least 18,
// and hasTicket must be the boolean true.
function checkAccess(age, hasTicket) {
  if (!Number.isInteger(age) || age < 0 || typeof hasTicket !== "boolean") {
    return false;
  }

  if (age >= 18 && hasTicket === true) {
    return true;
  } else {
    return false;
  }
}

console.log("Grade 100:", calculateGrade(100));
console.log("Grade 90:", calculateGrade(90));
console.log("Grade 89:", calculateGrade(89));
console.log("Grade 80:", calculateGrade(80));
console.log("Grade 70:", calculateGrade(70));
console.log("Grade 60:", calculateGrade(60));
console.log("Grade 0:", calculateGrade(0));
console.log("Grade -1:", calculateGrade(-1));
console.log("Grade 101:", calculateGrade(101));
console.log("Grade '90':", calculateGrade("90"));
console.log("Grade NaN:", calculateGrade(NaN));

console.log("Access 18 with ticket:", checkAccess(18, true));
console.log("Access 17 with ticket:", checkAccess(17, true));
console.log("Access 21 without ticket:", checkAccess(21, false));
console.log("Access '18' with ticket:", checkAccess("18", true));
console.log("Access 18 with nonboolean ticket:", checkAccess(18, "yes"));
