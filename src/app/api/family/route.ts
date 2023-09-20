import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

const family = {};

export async function GET() {
  await connectMongoDB();
  let nodes = await User.find();
  nodes = nodes.map((element, index) => ({
    ...element._doc,
    id: index,
  }));

  function construirArbolConEnlacesAutomaticos(datosNodos) {
    const arbol = { nodes: [], links: [] };

    const nodoPorId = new Map();

    datosNodos.forEach((nodo,index) => {
      const nuevoNodo = { ...nodo, children: [],group:index };
      arbol.nodes.push(nuevoNodo);
      nodoPorId.set(nodo.id, nuevoNodo);
    });

    datosNodos.forEach((nodo) => {
      const cantidadEnlaces = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < cantidadEnlaces; i++) {
        const nodoDestino =
          datosNodos[Math.floor(Math.random() * datosNodos.length)];
        if (nodoDestino.id !== nodo.id) {
          arbol.links.push({
            source: nodo.id,
            target: nodoDestino.id,
            group: i + 1,
          });
          const nodoOrigen = nodoPorId.get(nodo.id);
          nodoOrigen.children.push(nodoDestino);
        }
      }
    });

    const raiz = arbol.nodes.find(
      (nodo) => !arbol.links.some((enlace) => enlace.target === nodo.id)
    );

    return { arbol, raiz };
  }

  const { arbol, raiz } = construirArbolConEnlacesAutomaticos(nodes);

  return NextResponse.json(arbol);
}
