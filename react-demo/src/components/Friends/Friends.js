import React from 'react';

const Friends = (props) => {
    const {first_name, email, address, phone} = (props.friend);
    return (
        <div>
            <div>
            <h2>Frineds Name: {first_name.first_name}</h2>
            <p>Email: {email.email}</p>
            </div>
            <div className ="">
                <h2>Add Friends: </h2>
            </div>
        </div>

    );
};

export default Friends;