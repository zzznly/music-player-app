// 숫자 세자리마다 콤마 삽입
export const setComma = (value: number): string => {
  return Number(value).toLocaleString();
};

// 배경 색상 밝기에 따른 텍스트 색상 지정
export const setTextColor = (hexColor: string): string => {
  const color = hexColor?.slice(1); // 색상 앞의 # 제거
  const rgb = parseInt(color, 16); // rrggbb를 10진수로 변환
  const red = (rgb >> 16) & 0xff; // red 추출
  const green = (rgb >> 8) & 0xff; // green 추출
  const blue = (rgb >> 0) & 0xff; // blue 추출

  const luma: number = 0.222 * red + 0.707 * green + 0.071 * blue;

  return luma > 128 ? "#000" : "#fff";
};

// 플레이리스트 총 재생시간 계산 (hh시간 mm분)
export const getTotalDurationTime = (tracks: any[]): string => {
  const totalSeconds = tracks.reduce(
    (acc, item) => Math.floor(acc + item.track.duration_ms / 1000),
    0
  );
  const totalMinutes = Math.floor(totalSeconds / 60);
  const hh = Math.floor(totalMinutes / 60);
  const mm = totalMinutes % 60;

  return `약 ${hh}${hh && "시간"} ${mm}${mm && "분"}`;
};

// 트랙 한곡 재생시간 변환 (mm분 ss초)
export const getTrackDurationTime = () => {};

// 단어의 첫글자를 대문자로 변환
export const setFirstLetterUpperCase = (word: string) => {
  return word.slice(0, 1).toLocaleUpperCase() + word.slice(1);
};

// 시간 단위 변환 - ms(밀리초) 를 mm:ss(mm분:ss초) 단위로 변환
export const convertDurationTime = (ms: number): string => {
  const seconds = ms / 1000;

  return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)}`;
};
