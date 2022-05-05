export default defineEventHandler(async () => {
  const data = await fetch(
    'https://raw.githubusercontent.com/lockys/Awesome.json/master/awesome/awesome.json'
  );
  const json = await data.json();
  return json;
});
