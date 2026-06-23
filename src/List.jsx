function List() {
    let fruits = ['appele', 'banana', 'cherry']
    
    return (
        <>
           <ul>
            fruits.map((fruit) => <li>{fruit}</li>)
           </ul>
        </>
        
    )
}