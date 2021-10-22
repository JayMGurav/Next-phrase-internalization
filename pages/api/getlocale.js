// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function phraseHandler(req, res) {
  // if (!req.query.local) res.status(400).json({ error: "No locale mentioned" });
  // const availableLocales = await (
  //   await fetch(
  //     `https://api.phrase.com/v2/projects/${process.env.PHRASE_PROJECT_ID}/locales`
  //   )
  // ).json();
  // console.log(process.env.PHRASE_PROJECT_ID);
  // // 96e033d2864c55b9c02f4dc07a2e56ca
  // const data = await fetch(
  //   "https://api.phrase.com/v2/projects/96e033d2864c55b9c02f4dc07a2e56ca/locales/e302eeb5ec34cbc6d2e8fefe19501a80/download?file_format=simple_json",
  //   {
  //     headers: {
  //       Authorization: `token ${process.env.PHRASE_ACCESS_TOKEN}`,
  //     },
  //   }
  // );
  // const translations = await data.json();
  // console.log({ translations });
  res.status(200).json({ name: "John Doe" });
}
