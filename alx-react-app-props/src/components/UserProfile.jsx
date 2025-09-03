import { useContext } from "react";
import UserDetails from "./UserDetails";

function UserProfile(){
  const UserData = useContext(useContext);
  return <UserDetails UserData={UserData}/>
}
export default UserProfile