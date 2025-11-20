import foodSvg from "../assets/food.svg"
import serviceSvg from "../assets/services.svg"
import transportSvg from "../assets/transport.svg"
import accommodationSvg from "../assets/accommodation.svg"
import otherSvg from "../assets/others.svg"

export const CATEGORIES = {
    food: {
        name: "Alimentação",
        icon: foodSvg
    },
    service: {
        name: "Serviço",
        icon: serviceSvg
    },
    transport: {
        name: "Transporte",
        icon: transportSvg
    },
     accommodation: {
        name: "Acomodação",
        icon: accommodationSvg
    },
    other: {
        name: "Outros",
        icon: otherSvg
    },

}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array < keyof typeof CATEGORIES>