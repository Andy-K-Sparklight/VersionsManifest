const got = require("got");
module.exports = (req, res) => {
    (async ()=>{
        const r = await got.get("https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json", {responseType:"json"});
        res.setHeader("Cache-Control", "max-age=0, s-maxage=43200, stale-while-revalidate");
        res.status(200).json(r.body);
    })()
}
