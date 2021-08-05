const got = require("got");
module.exports = (req, res) => {
   console.log(req);
   const CF_BASE = "https://addon-ecs.forgesvc.net";
    (async ()=>{
        const r = await got.get(CF_BASE + req.path, {responseType:"json"});
        res.setHeader("Cache-Control", "max-age=0, s-maxage=43200, stale-while-revalidate");
        res.status(200).json(r.body);
    })();
  console.log("Forwareded request to " + CF_BASE + req.path);
}
