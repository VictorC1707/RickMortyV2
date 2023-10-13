import Card from './Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   return <div class="container my-12 mx-auto px-4 md:px-12">
   <div class="flex flex-wrap -mx-1 lg:-mx-4">
      {characters.map(character => 
         <Card key={character.id}
         name={character.name}
         id={character.id}
         status={character.status}
         species={character.species}
         gender={character.gender}
         image={character.image}
         onClose={onClose}/>
         )}
   </div>
   </div>
}
