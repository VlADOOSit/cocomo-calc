import useKlocStore from "../Store/KlocStore";

const Profile = () => {
  const klocStore = useKlocStore((state) => state.klocValue);

  function testKloc() {
    console.log(klocStore);
  }

  return (
    <div>
      This is Profile page
      <button onClick={testKloc}>test</button>
    </div>
  );
};

export default Profile;
