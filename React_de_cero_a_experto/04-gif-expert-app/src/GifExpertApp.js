


import React,{useState} from 'react';
import AddCategory from './components/AddCategory';
//import ReactDOM from 'react-dom';



const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One punch','Samurai X','Dragon Ball'])

    //const handleAdd = ()=>{
   //     setstate(cats=> [...cats,'HunterXHunter'])
    //}


    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>

                {
                    categories.map(category=>{
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp