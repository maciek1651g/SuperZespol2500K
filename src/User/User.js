class User
{
    constructor(user)
    {
        this.setUser(user)
    }

    setUser(user)
    {
        if(user!==null)
        {
            this.email = user.email;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.groups = user.groups;
            this.isSet = true;
            localStorage.setItem('User', JSON.stringify(this));
        }
        else
        {
            this.isSet = false;
        }
    }
}

const localUser =  localStorage.getItem("User");
const currentUser = localUser!==null?
    new User(JSON.parse(localUser)):
    new User({email:"mariusz@sggw.edu.pl", firstName:"Mariusz", groups:[], lastName:"Kowalski"});

export default currentUser