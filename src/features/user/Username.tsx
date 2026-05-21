import { useUser } from "./userSlice";

function Username() {
  const username = useUser((state) => state.username);

  if (!username) return null;

  return <p className="hidden text-sm font-semibold md:inline">{username}</p>;
}

export default Username;
