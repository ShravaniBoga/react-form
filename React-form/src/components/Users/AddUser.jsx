
import Card from '../UI/Card'


import classes from './AddUser.module.css';
const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault()

    }
    console.log(classes, "line10")
    return (
        <div>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='name'>Username</label>
                    <input id='name' type="text" />
                    <label htmlFor='age'>Age(Years)</label>
                    <input id='age' type="text" />
                    <button type='submit'>Add User</button>
                </form>
            </Card>

        </div>
    )
}

export default AddUser
