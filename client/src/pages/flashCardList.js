import React from 'react'
import Flashcard from './flashCard';

export default function flashCardList({ flashcards }) {

    const flashCards = [
        {
            id: 1,
            question: 'Does plastic break down in sea water',
            answer: 'False. It is very difficult for plastic to break down in sea water.  Latest estimates that plastic can take up to 450 years for it to break down. ',
            options: [
                'true',
                'false'
                
          
            ],
            src:'https://www.businessinsider.com/photos-indias-ganges-river-pollution-2018-1'
        },
        {
            id: 2,
            question: 'What river is the most polluted?',
            answer: 'The Ganges! The Ganges River has the unfortunate title of being the most polluted river in the world it also provides drinking water to over 400 million people.',
            options: [
                'The Hudson River',
                'The Colorado River',
                'The Ganges.'
                
            ],
            src:'https://www.businessinsider.com/photos-indias-ganges-river-pollution-2018-1'
        },
        {
            id: 3,
            question: 'Does government subsidies of Large-scale fishing contribute to over-fishing?',
            answer: 'True. Subsidies can lead to overcapacity of fishing vessels and skewing of production costs so that fishing operations continue when they would otherwise not make economic sense',
            options: [
                'True',
                'False'
                
                
            ],
            src:'https://www.worldwildlife.org/threats/overfishing'
        },
        {
            id: 4,
            question: 'What river is the most polluted?',
            answer: 'The Ganges! The Ganges River has the unfortunate title of being the most polluted river in the world it also provides drinking water to over 400 million people.',
            options: [
                'The Hudson River',
                'The Colorado River',
                'The Ganges.'
                
            ],
            src:'https://www.businessinsider.com/photos-indias-ganges-river-pollution-2018-1'
        },
        {
            id: 5,
            question: 'Can overfishing cause adverse changes to an oceans echo system?',
            answer: 'True ,When Food sources are depleted in an area it can change and oceans echo system including the migratory patterns of predator Sea life and bring them closer inland and closer to human contact.',
            options: [
                'True',
                'False',
                
                
            ],
            src:'https://sharkresearch.rsmas.miami.edu/research/projects/ecosystems-impacts-of-overfishing/'
        },
        {
            id: 6,
            question: 'What river is the most polluted?',
            answer: 'The Ganges! The Ganges River has the unfortunate title of being the most polluted river in the world it also provides drinking water to over 400 million people.',
            options: [
                'The Hudson River',
                'The Colorado River',
                'The Ganges.'
                
            ],
            src:'https://www.businessinsider.com/photos-indias-ganges-river-pollution-2018-1'
        },
        {
            id: 7,
            question: 'What river is the most polluted?',
            answer: 'The Ganges! The Ganges River has the unfortunate title of being the most polluted river in the world it also provides drinking water to over 400 million people.',
            options: [
                'The Hudson River',
                'The Colorado River',
                'The Ganges.'
                
            ],
            src:'https://www.businessinsider.com/photos-indias-ganges-river-pollution-2018-1'
        },
        {
            id: 8,
            question: 'What river is the most polluted?',
            answer: 'The Ganges! The Ganges River has the unfortunate title of being the most polluted river in the world it also provides drinking water to over 400 million people.',
            options: [
                'The Hudson River',
                'The Colorado River',
                'The Ganges.'
                
            ],
            src:'https://www.businessinsider.com/photos-indias-ganges-river-pollution-2018-1'
        }
        
      ]
    return (
        <div className="card-grid">
            {flashCards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )

}