const got = require("got");
module.exports = (req, res) => {
    (async ()=>{
        const r = await got.get("https://launchermeta.mojang.com/mc/game/version_manifest.json", {responseType:"json"});
        res.setHeader("Cache-Control", "max-age=0, s-maxage=86400, stale-while-revalidate");
        res.status(200).json(r.body);
    })()
}
