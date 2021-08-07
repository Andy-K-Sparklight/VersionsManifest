const got = require("got");
module.exports = (req, res) => {
    (async ()=>{
      console.log(req.query);
      let pt = req.query.path;
      console.log(pt);
        const r = await got.get("https://launcher.mojang.com/v1/objects/"+pt, {responseType:"json"});
        res.setHeader("Cache-Control", "max-age=0, s-maxage=86400, stale-while-revalidate");
        res.status(200).json(r.body);
    })()
}
