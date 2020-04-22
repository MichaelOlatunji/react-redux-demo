import React, { useEffect } from 'react';
import { fetchUsers } from './redux';
import { connect } from 'react-redux';

const User = ({userData, fetchUsers}) => {

    useEffect(() => {
        fetchUsers()
    }, [])
    
    return (
        <div>
            {userData.loading ? (<h3>loading...</h3>) : userData.error ? (<h3>{userData.error}</h3>) : (
                <div>
                    <h3>User List</h3>
                    <div>
                        {
                            userData && userData.users && userData.users.map(user => <p>{user.id}. { user.name}</p>)
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);