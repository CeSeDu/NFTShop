import express from "express";
const router = express.Router();
import controller from "../controller/controller.js";

router.get("/main-section", controller.mainSection);
router.get("/exclusive-drops", controller.exclusiveDrops);
router.get("/trending-explore",controller.trendingExplore );
router.get("/seller-users",controller.sellerUsers )

export default router;
