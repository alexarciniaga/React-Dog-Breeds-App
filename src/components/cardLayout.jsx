import React from 'react'

const Breeds = ({breeds}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {breeds.map((breed) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{breed.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{breed.email}</h6>
                        <p class="card-text">{breed.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Breeds