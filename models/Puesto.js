const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const puestoSchema = new Schema({
  
  locatario: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  stallName: {
    type: String,
    required:true
  },

  price:{
    type: String,
    required:false
  },

  priceMath: {
    type:Number
  },

  location: {
    type: {
      type: String,
      default:"Point"
    },

    address: {
      type: String
    },

    references: {
      type: String
    },

    coordinates: {
      type: Number
    }
  },

  products : [{type: String}],

  description: {
    type: String
  },

  businessHours : {
    type: String
  },

  images: [{type: String}]

},

{ timestamps: true}
);


<<<<<<< HEAD
module.exports = mongoose.model("Puesto", puestoSchema)

/**
 * {
  "puestos": [
    {
      "stallName": "",
      "location": {
        "references": "Colonia Roma, esquina Durango y Jalapa, afuera de Oxxo",
        "address": "Calle Durango Ciudad de Mexico, Mexico"
      },
      "description": "Mesita afuera del Oxxo. Tortitas envueltas en servilletas.",
      "products": ["chilaquiles", "tortas de chilaquiles"],
      "businessHours": "Lunes a domingo. 6:30 AM 11:20 AM",
      "price": "",
      "priceMath": [],
      "images": []
    },

    {
      "stallName": "",
      "location": {
        "references": "Colonia Roma, esquina Durango y Jalapa, afuera de 7-Eleven.",
        "address": "Calle Durango Ciudad de Mexico, Mexico"
      },
      "description": "Puesto de acero inoxidable.",
      "products": ["jugos", "licuados", "cocteles", "aguas", "aguas frutales"],
      "businessHours": "Lunes a Viernes 7:00 AM 6:00 PM. Sábados 7:00 AM 1:00 PM.",
      "price": "",
      "priceMath": [],
      "images": []
    },

    {
      "stallName": "El estudiante",
      "location": {
        "references": "Colonia Roma, casi esquina Durango y Jalapa, afuera de 7-Eleven. Sobre la banqueta. Casi a mitad de la calle.",
        "address": "Calle Durango Ciudad de Mexico, Mexico"
      },
      "description": "Puesto de acero inoxidable con bancos rojos.",
      "products": ["tortas"],
      "businessHours": "Lunes a sábado. 8:00 AM 8:00 PM",
      "price": "$37.00 - 75.00 (pesos)",
      "priceMath": [37, 75],
      "images": []
    },

    {
      "stallName": "",
      "location": {
        "references": "Colonia Roma, esquina Calles Puebla y Jalapa, afuera de 7-Eleven",
        "address": "Calle Puebla Ciudad de Mexico, Mexico"
      },
      "description": "",
      "products": ["churros", "fruta", "fruta picada"],
      "businessHours": "Lunes a sábado. 4:00 AM 4:00 PM",
      "price": "",
      "priceMath": [],
      "images": []
    },

    {
      "stallName": "",
      "location": {
        "references": "Colonia Roma, casi esquina Calles Puebla y Jalapa, afuera de 7-Eleven",
        "address": "Calle Jalapa Ciudad de Mexico, Mexico"
      },
      "description": "",
      "products": ["baguette", "baguettes", "cafe", "café", "café americano", "cafés americanos", "gelatina", "gelatinas", "pan", "pan dulce", "sandwiches", "tortas", "yogurt"],
      "businessHours": "Lunes a sábado. 5:30 AM 11:30 AM",
      "price": "",
      "priceMath": [],
      "images": []
    },

    {
      "stallName": "",
      "location": {
        "references": "Colonia Roma, Calle Puebla, cerca de 7-Eleven",
        "address": "Calle Jalapa Ciudad de Mexico, Mexico"
      },
      "description": "",
      "products": ["carnitas", "chamorro", "costilla", "maciza", "trompa"],
      "businessHours": "Lunes a sábado. 8:00 AM 5:30 PM",
      "price": "",
      "priceMath": [],
      "images": []
    },

    {
      "stallName": "",
      "location": {
        "references": "Colonia Roma, Calle Puebla, cerca de 7-Eleven",
        "address": "Calle Jalapa Ciudad de Mexico, Mexico"
      },
      "description": "",
      "products": ["carnitas", "chamorro", "costilla", "maciza", "trompa"],
      "businessHours": "Todos los días. 8:30 AM 12:30 PM",
      "price": "",
      "priceMath": [],
      "images": []
    },

    {
      "stallName": "Tacos Puebla",
      "location": {
        "references": "Colonia Roma, Calle Puebla, cerca de 7-Eleven",
        "address": "Calle Jalapa Ciudad de Mexico, Mexico"
      },
      "description": "Puesto con lona anaranjada. Cinco tacos por $26.00 (pesos)",
      "products": ["campechano", "campechanos", "gringa", "gringas", "longaniza", "taco", "tacos", "torta", "tortas", "tripa", "suadero"],
      "businessHours": "Lunes a sábado. 8:00 AM 5:30 PM",
      "price": "$6.00 $26.00 (pesos)",
      "priceMath": [6],
      "images": []
    },

    {
      "stallName": "El gallo",
      "location": {
        "references": "Colonia Roma, Calle Puebla",
        "address": "Calle Jalapa Ciudad de Mexico, Mexico"
      },
      "description": "Puesto de acero inoxidable. Bancos azules. Caldos de pechuga, huacal, rabadilla, alón.",
      "products": ["caldo", "caldos", "caldo de gallina", "caldos de gallina"],
      "businessHours": "Lunes a sábado. 24 hrs. Domingo 7:00 AM 8:00 PM",
      "price": "$15.00 - 70.00 (pesos)",
      "priceMath": [6],
      "images": []
    },

    {
      "stallName": "Tacos El padrino",
      "location": {
        "references": "Colonia Roma, Calle Puebla",
        "address": "Calle Jalapa Ciudad de Mexico, Mexico"
      },
      "description":"Puesto de acero inoxidable. Tacos light.",
      "products": ["light", "taco", "tacos", "taco light", "tacos light"],
      "businessHours": "Lunes a sábado. 24 hrs.",
      "price": "",
      "priceMath": [],
      "images": []
    },

    {
      "stallName": "Hamburguesas i-carbón",
      "location": {
        "references": "Colonia Roma, Esquina Tonalá e Insurgentes",
        "address": "Calle Tonala Ciudad de Mexico, Mexico"
      },
      "description":"Puesto de acero inoxidable. Lona amarilla. Entrega a domicilio. Tel. 5207-8568",
      "products": ["domicilio", "entrega", "entrega a domicilio", "hamburguesa", "hamburguesas"],
      "businessHours": "Todos los días, 24 hrs.",
      "price": "",
      "priceMath": [],
      "images": []
    },

    {
      "stallName": "Luisito",
      "location": {
        "references": "Colonia Roma, Esquina Tonalá e Insurgentes",
        "address": "Calle Tonala Ciudad de Mexico, Mexico"
      },
      "description":"Puesto de acero inoxidable. Lona amarilla. Entrega a domicilio. Tel. 5207-8568",
      "products": ["agua", "aguas", "jugo", "jugos", "licuado", "licuados"],
      "businessHours": "Todos los días, 24 hrs.",
      "price": "",
      "priceMath": [],
      "images": []
    },

    {
      "stallName": "Sushi Haruki-Go",
      "location": {
        "references": "Sobre Insurgentes, dirección Norte. A dos cuadras de metro Insurgentes. Frente a 7-Eleven",
        "address": "Avenida Insurgentes Ciudad de Mexico, Mexico"
      },
      "description":"Puesto de fierro rojo. 2*1 por apertura (Enero 2020). Tel. 55-3384-2963",
      "products": ["kushiage", "rollos", "sushi"],
      "businessHours": "Todos los días. 10:00 AM - 6:00 PM",
      "price": "$18:00 - $70:00 (pesos)",
      "priceMath": [18, 70],
      "images": []
    },

    {
      "stallName": "Costras de la Roma",
      "location": {
        "references": "Sobre Insurgentes, dirección Norte. A dos cuadras de metro Insurgentes. Frente a 7-Eleven",
        "address": "Avenida Insurgentes Ciudad de Mexico, Mexico"
      },
      "description":"Puesto de fierro rojo y lona rayada. Comida para eventos. Tel. 55-1910-2695, 55-8096-6586",
      "products": ["aguacate", "arrachera", "camaron", "camarón", "camarones", "chistorra", "chorizo argentino", "chuleta", "pulpo", "costilla", "costra", "costras", "gringa", "gringas", "rib eye", "rib-eye", "sirloin", "t-bone", "taco", "tacos", "volcan", "volcanes"],
      "businessHours": "Todos los días. 10:00 AM - 6:00 PM",
      "price": "$18:00 - $70:00 (pesos)",
      "priceMath": [18, 70],
      "images": []
    },

    {
      "stallName": "",
      "location": {
        "references": "Sobre Insurgentes, dirección Norte. A dos cuadras de metro Insurgentes. Casi en frente de 7-Eleven",
        "address": "Avenida Insurgentes Ciudad de Mexico, Mexico"
      },
      "description":"Puesto de fierro con bancos de plástico. Taquitos de guisado.",
      "products": ["arroz", "guisado", "guisados", "chicharron", "chicharrón", "frijol", "frijoles", "taco", "tacos"],
      "businessHours": "Todos los días. 10:00 AM - 6:00 PM",
      "price": "$18:00 - $70:00 (pesos)",
      "priceMath": [18, 70],
      "images": []
    }
      
  ]
}
 */
=======
module.exports = mongoose.model("Puesto", puestoSchema);
>>>>>>> 6e2f61dfc6ca77635e24a7d2546dcc04a7b2c90b
