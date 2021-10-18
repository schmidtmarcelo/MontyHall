import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/porta";
import Jogo from "./jogo/[portas]/[temPresente]";

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <h1>Inicio do Jogo</h1>
    </div>
  )
}
