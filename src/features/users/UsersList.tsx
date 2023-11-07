import { useGetUsersQuery } from "./usersApiSlice"
import { Link } from "react-router-dom";

const UsersList = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery(null);

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = (
            <section className="users">
                <h1>Users List</h1>
                <ul>
                    {users.map((user:any, i:any) => {
                        return <li key={i}>{user.username}</li>
                    })}
                </ul>
                <Link to="/welcome">Back to Welcome</Link>
            </section>
        )
    } else if (isError) {
        content = <p>{JSON.stringify(error)}</p>;
    } else {
        content = <p>Unexpected Error</p>; // 기본 반환 값
    }

    return content
}
export default UsersList