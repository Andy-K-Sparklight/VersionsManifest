const got = require("got");
module.exports = (req, res) => {
    (async ()=>{
        const r = await got.get("launchermeta.mojang.com/mc/game/version_manifest.json", {responseType:"json"});
        res.json(r.body)
    })()
}
