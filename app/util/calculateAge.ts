export default function calculateAge() {
  const dob = Date.parse("01 Jun 2003 00:00:00 GMT");
  const today = Date.now();
  const delta = today - dob;
  const age = Math.floor(delta / 1000 / 60 / 60 / 24 / 365);
  return age;
}
