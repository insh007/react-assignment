import User from './User'
import userList from './users.json'

const ListComponent = () => {
    return <div className='user-list'>
        <h2>List of  Users</h2>
        {
            userList.map((userData,index)=> <User name={userData.name} age={userData.age} gender={userData.gender} key={index} />)
        }
        {/* <User name="Jhon Wick" age={34} gender="M"/> */}
    </div>
}

export default ListComponent