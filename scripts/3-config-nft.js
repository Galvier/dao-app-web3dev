import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x7e0FC364cF1599D2c4bd4B4786c91814b2c49831");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "DEV Super Estilo",
        description: "Esse NFT vai te dar acesso ao DevDAO!",
        image: readFileSync("scripts/assets/Daily-dev.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()