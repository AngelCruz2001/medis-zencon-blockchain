// import {Button} from '@nextui-org/button'; 

// export default function Page() {
//   return (
//     <>
//       <Button>Click me</Button>
//       <h1>Hola mundoooo</h1>
//     </>
//   )
// }

"use client";

import React from "react";
import { getInfo,saveData } from "@/blockchain/medisFunctions";
import {useState,useEffect} from 'react';


export default function Home() {

  const data = `
    {
        "medical_history": [
            {
                "1": {
                    "medical-recipt": [
                        {
                            "date": "17-09-2023",
                            "medic_name": "Ejemplo",
                            "medical-prescription": [
                                {
                                    "1": {
                                        "medicine_id": 1,
                                        "instructions": "Take 2 tablets each 4 hours for 3 day"
                                    },
                                    "2": {
                                        "medicine_id": 32,
                                        "instructions": "Take 2 tablets each 4 hours for 3 day"
                                    }
                                }
                            ]
                        }
                    ],
                    "medical-diagnosis": "Covid-19"
                },
                "2": {
                    "medical-recipt": [
                        {
                            "date": "20-09-2023",
                            "medic_name": "Dillon Francis",
                            "medical-prescription": [
                                {
                                    "1": {
                                        "medicine_id": 1,
                                        "instructions": "Take 2 tablets each 4 hours for 3 day"
                                    },
                                    "2": {
                                        "medicine_id": 32,
                                        "instructions": "Take 2 tablets each 4 hours for 3 day"
                                    }
                                }
                            ]
                        }
                    ],
                    "medical-diagnosis": "Flu"
                }
            }
        ],
        "waypoint":[
            {"lat":"-22.990006",
            "long":"-43.184392"}
        ],
        "sickness":"Covid-19",
        "medicine_required":"Bio Electro"
    }

`

  const [dataInfo,setDataInfo]:any = useState();

  useEffect(()=>{},[]);
  // getInfo();
  // saveData(data)


  return <>
    <div style={{textAlign:"center",marginTop:"5rem"}}>
      
    <h1>Enviar Información y recibir</h1>
    </div>

    <div style={{textAlign:"center",marginTop:"2rem"}}>
      <button style={{padding:"1rem",borderRadius:".5rem",margin:"1rem",fontWeight:"bold"}} onClick={()=>{
        saveData(data);
      }}>Enviar Información</button>
      <button style={{padding:"1rem",borderRadius:".5rem",margin:"1rem",fontWeight:"bold"}} onClick={()=>{
        getInfo().then((data)=>{
          setDataInfo(data)
        })
      }}>Obtener Información</button>
    </div>
  </>
}