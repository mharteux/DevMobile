import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect } from "react";


const StudyCardsContext = createContext()

export const StudyCardsProvider = ({ children }) => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        loadCards()
    }, [])

    const loadCards = async () => {
        const storagedCards = await AsyncStorage.getItem('cards')
        if (storagedCards) setCards(JSON.parse(storagedCards))
    }

    const addCard = async (card) => {
        const newCards = [...cards, { ...card, id: Date.now() }]
        setCards(newCards)
        await AsyncStorage.setItem('cards', JSON.stringify(newCards))
    }

    const updateCard = async (id, updates) => {
        const newCards = cards.map(card => card.id === id ? {
            ...card, ...updates
        } : card)
        setCards(newCards)
        await AsyncStorage.setItem('cards', JSON.stringify(newCards))
    }

    const deleteCard = async (id) => {
        const newCards = cards.filter(card => card.id !== id)
        setCards(newCards)
        await AsyncStorage.setItem('cards', JSON.stringify(newCards))
    }

    return (
        <AsyncStorage.Provider value={{ cards, addCard, updateCard, deleteCard }}>
            {children}
        </AsyncStorage.Provider>
    )
}

export default StudyCardsContext
