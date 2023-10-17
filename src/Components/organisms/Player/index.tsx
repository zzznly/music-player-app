import "./style.scss";

// components
import PlayerList from "../PlayerList";
import PlayerDevice from "../PlayerDevice";

export default function Player() {
  /* TODO: 커스텀훅 만들까 말까... */
  // const usePlayerController = (
  //   device_id: string,
  //   dependancies: any[],
  //   mutation: UseMutationResult
  // ) => {
  //   useEffect(() => {
  //     if (device_id.length) {
  //       mutation.mutate({});
  //     }
  //   }, dependencies);
  //   return mutation;
  // };

  return (
    <>
      <div className="player">
        <PlayerList />
        <PlayerDevice />
      </div>
    </>
  );
}
