const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");


router.use("/api", apiRoutes);


function base_path(req,res) {
  return res.json({ a: 1 });
}

router.use("/test" , base_path);

// connect with react router
// serve up react front-end in production

// router.get('/' , () =>{
//   return 
// })

// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, "../../build/index.html"));
// });

module.exports = router;
