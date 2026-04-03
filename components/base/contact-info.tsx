type Props = {
  size?: "small";
};

export function ContactInfo({ size = "small" }: Props) {
  return (
    <div
      className={`text-white flex flex-col gap-2 ${size === "small" ? "text-sm" : ""}`}
    >
      <div>
        <div>ul. Świętojańska 59 lok. nr 4</div>
        <div>81-391 Gdynia</div>
      </div>

      <div>
        <div>+48 669 998 340</div>
        <div>ga.finanse@wp.pl</div>
      </div>

      <div>
        <div>NIP 5862314868</div>
        <div>REGON 366577954</div>
      </div>
    </div>
  );
}
